import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, author, bookId,totalPages,rating, image, category, tags } =
    singleBook;

  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="card  w-72 border shadow-sm">
        <figure className="bg-gray-100 p-4 mt-2 mx-auto ">
          <img className="w-30 h-36" src={image} />
        </figure>
        <div>
          {tags.map((tag) => (
            <button className="text-green-300 mr-5 ml-7 mt-4 rounded-md font-bold text-sm border p-1">
              {tag}
            </button>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>by :{author}</p>
          <div className="border-1 border-dashed"></div>
          <div className="card-actions justify-between">
            <p className="font-bold">Number of Page :{totalPages}</p>
            <div className="badge">{category}</div>
            <div className="badge">
              {rating}
              <FaStarHalfAlt></FaStarHalfAlt>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
