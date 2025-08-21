import React from "react";
import { useLoaderData, useParams } from "react-router";

const BooksDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const bookId = parseInt(id);
  console.log(bookId);
  console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);
  const {
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,

    totalPages,
    yearOfPublishing,
  } = singleBook;

  return (
    <div>
      <div className="flex gap-20 mt-4">
        <div>
          <img className="h-93 bg-gray-200 p-8" src={image} alt="" />
        </div>
        <hr />
        <div className="w-[50%]">
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p
            className="mb-2
          "
          >
            by : {author}
          </p>
          <hr />
          <p className="font-bold mb-2">{category}</p>
          <hr />
          <p className="font-bold mb-2">
            Review :<span className="text-xs">{review}</span>
          </p>
          <p>
            {" "}
            <span className="font-bold">Tag</span>
            {tags.map((tag) => (
              <button className="text-green-500 mr-5 ml-7 mt-4 rounded-sm bg-gray-100 p-1">
                #{tag}
              </button>
            ))}
          </p>
          <hr />
          <div className="mt-4">
            <p className="font-bold">Year of Publishing :{yearOfPublishing}</p>
            <p className="font-bold">Number of Page :{totalPages}</p>

            <p className="font-bold">Rating : {rating}</p>
          </div>

          <div className="flex gap-8 mt-4 mb-4">
            <button className="btn btn-active btn-accent">Read</button>
            <button className="btn btn-active btn-info">Whislist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
