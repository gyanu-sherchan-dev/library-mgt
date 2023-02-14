import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="sidebar bg-info">
      <div className="top">
        <img
          src="https://images.unsplash.com/photo-1593882100241-aef1449fe351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt="profile-img"
        />
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">main</p>
          <li>
            <Link to="/books" className="link">
              <i className="fa-solid fa-book"></i>
              <span>All Books</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <i className="fa-solid fa-book-open"></i>
              <span>My Books</span>
            </Link>
          </li>
          {currentUser?.role === "teacher" && (
            <>
              <li>
                <Link to="/" className="link">
                  <i className="fa-solid fa-book"></i>
                  <span>Add Book</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  <i className="fa-sharp fa-solid fa-right-left"></i>
                  <span>Transaction</span>
                </Link>
              </li>
            </>
          )}
          <p className="title">User</p>
          <li>
            <Link to="/" className="link">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
