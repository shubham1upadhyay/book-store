import React from 'react';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BookCard.css';
import BookCard from './BookCard';
import Book from './Book';


const Mainpage = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
          );
          setBooks(response.data.items);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

    const [isFull, setIsFull] = useState(false);

  const fullWidth = () => {
    setIsFull(!isFull);
  };
    

    return (
        <>
        <Navbar />
        <div className={`book-container ${isFull ? 'expanded' : ''}`}>
          {books.map((item) => (
          <div className={`parent ${isFull ? 'expanded' : ''}`}>
          <img src = {item.volumeInfo.imageLinks.thumbnail} alt="book" />           
          <div className={`child ${isFull ? 'expanded' : ''}`}>
              <h4 className='fs-5'>{item.volumeInfo.title}</h4>
              <h6 className='book-info'>{item.volumeInfo.authors}
              <span className='publisher fs-5'>Published ON: {item.volumeInfo.publishedDate}</span>
              </h6>
               <p className='mx-2 w-100'>{item.volumeInfo.description}</p>
              
              <div className="information">
                <div className='d-flex'>
                <p className='book-info'>Avg.Rating: {item.volumeInfo.averageRating}</p>
                <p className='book-info'>Rating Count: {item.volumeInfo.ratingsCount}</p>
                <p className='book-info'>Publisher: {item.volumeInfo.publisher}</p>
                <p className='book-info'>Language: {item.volumeInfo.language}</p>
                  </div>

                  <div className='d-flex'>
                    <button className={`expand-read-btn ${isFull ? 'expanded' : ''}`}>Now Read!</button>
                    <button className={`expand-more-info ${isFull ? 'expanded' : ''}`}>More Info</button>
                    </div>

                </div>

              <button onClick={fullWidth} className={`read-btn ${isFull ? 'expanded' : ''}`}>Now Read!</button>
          </div>
          </div>
        
      ))}
    </div>
    <BookCard />
        </>
    );
}

export default Mainpage;