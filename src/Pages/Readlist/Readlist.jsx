import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { storedBook } from "../../Components/utility/addToDB";
import Book from "../Book/Book";

const Readlist = () => {
  const bookData = useLoaderData();
  const [readlist, setreadlist] = useState([]);
  const [sortData, setSortData] = useState("");

  useEffect(() => {
    const readData = storedBook();

    const convertBookid = readData.map((id) => parseInt(id));
    const myReadlist = bookData.filter((book) =>
      convertBookid.includes(book.bookId)
    );
    setreadlist(myReadlist);
  }, [bookData]);

const handleSortData = (type) => {
  setSortData(type); // store the type
  if (type === "pages") {
    const sortbyPages = [...readlist].sort((a, b) => a.totalPages - b.totalPages);
    setreadlist(sortbyPages);
  } else if (type === "rating") {
    const sortByRating = [...readlist].sort((a, b) => b.rating - a.rating);
    setreadlist(sortByRating);
  }
};


  return (
    <div>
      <Tabs>
        <details className="dropdown">
          <summary className="btn mx-auto m-5">Sort By:{sortData ? sortData : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSortData('pages')}>Page</a>
            </li>
            <li>
              <a onClick={() => handleSortData('rating')}>Rating</a>
            </li>
          </ul>
        </details>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WistList </Tab>
        </TabList>

        <TabPanel>
          <h2 className="font-bold">Book I Read :{readlist.length}</h2>

          <div className=" mb-4 mt-4">
            {readlist.map((b) => (
              <Book key={b.BookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>WistContent</h2>
        </TabPanel>
      </Tabs>{" "}
    </div>
  );
};

export default Readlist;
