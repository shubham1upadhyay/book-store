import React from "react";
import './BookCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const BookCard = ()=>{

    const sherlockAPI = 'https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes';
    const harryApI = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';
    const [sherlock, setSherlock] = useState([]);
    const [harryPotter, setHarryPotter] = useState([]);

    // fetching harry potter book
    useEffect(() => {
      const fetchHarryPotter = async () => {
        try {
          const response = await axios.get(harryApI);
          setHarryPotter(response.data.items);
        } catch (error) {
          console.error(error);
        }
      };
      fetchHarryPotter();
    }, []);

    // fetching sherlock book
    useEffect(() => {
        const fetchSherlock = async () => {
          try {
            const response = await axios.get(sherlockAPI);
            setSherlock(response.data.items);
          } catch (error) {
            console.error(error);
          }
        };
        fetchSherlock();
      }, []);

    return (
        <>
        <div className="books-img-container">
           <h4>MORE BOOKS</h4>
           <div className="img-container">
           {sherlock.map((item) => (
            <img src = {item.volumeInfo.imageLinks.thumbnail} alt="book" />           
            ))}
            {harryPotter.map((item) => (
            <img src = {item.volumeInfo.imageLinks.thumbnail} alt="book" />           
            ))}
           </div>
        </div>
        </>
    );
}

export default BookCard;