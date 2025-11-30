import React from "react";
import book from "../../public/book.jpg";
function Cards({ item }) {
  return (
    <div className="my-5">
      <div className="card bg-base-100 w-96 shadow-sm hover:scale-105  duration-100 dark:bg-slate-800 dark:text-white ">
        <figure>
          <img className="rounded-2xl" src={book} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between cursor-pointer">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 px-2 py-2">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
