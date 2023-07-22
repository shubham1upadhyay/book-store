import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import bookheart from "../resources/book-heart.png";
import fluent from "../resources/fluent.png";
import bell from "../resources/bell.png";
import profile from "../resources/profile.png";

const Navbar = () => {

    return(
       <div className="mynav">

        <div className="brand-logo">
           <h4>KeazoN<span className="text-dark fs-5">BOOKS</span></h4>
        </div>

        <div>
            <input className="search" type="search" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." />
            <button className="mx-3 search-btn">Search</button>
        </div>

        <div className="nav-img">
            <img className="mx-2" src={bookheart} alt="book-store"/>
            <img className="mx-2" src={bell} alt="book-store"/>
            <img className="mx-2" src={fluent} alt="book-store"/>
            <img className="mx-2" src={profile} alt="book-store"/>
        </div>
       </div>
    );
}
export default Navbar;