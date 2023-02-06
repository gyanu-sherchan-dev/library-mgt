import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside>
      <div className="top">
        <img
          src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          alt=""
        />
      </div>
      <hr />

      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/books" className="link">
            <li>
              <i className="fa-solid fa-book"></i> <span>All Books</span>
            </li>
          </Link>

          <Link to="/mybooks" className="link">
            <li>
              <i className="fa-solid fa-book-open-reader"></i>
              <span>My Books</span>
            </li>
          </Link>

          <Link to="/books/add" className="link">
            <li>
              <i className="fa-solid fa-book"></i>
              <span>Add Book</span>
            </li>
          </Link>

          <Link to="/transactions" className="link">
            <li>
              <i className="fa-solid fa-book-open-reader"></i>{" "}
              <span>Transactions</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/profile" className="link">
            <i className="fa-solid fa-user"></i> <span>Profile</span>
          </Link>
        </ul>
      </div>
    </aside>
  );
};
