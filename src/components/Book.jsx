import React from "react";
import './BookCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Book = ()=>{

    const API = 'https://www.googleapis.com/books/v1/volumes/L18VBQAAQBAJ';
    const [book, setBook] = useState([]);
    
    useEffect(() => {
      const fetch = async () => {
        try {
          const response = await axios.get(API);
          setBook(response.data.items);
        } catch (error) {
          console.error(error);
        }
      };
      fetch();
    }, []);


    return (
        <>
        <div className="books-img-container">
           <h4>MORE BOOKS</h4>
           <div className="img-container">
           {book.map((item) => (
            <p>{item.volumeInfo.Description}</p>
            
            ))}
           </div>
        </div>
        </>
    );
}

export default Book;