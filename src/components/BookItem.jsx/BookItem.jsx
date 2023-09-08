import React from "react";


const BookItem = ({ book }) => {
  return (
    <div className="book-container">
    {book.map((item) => (
      <div key={item.id} className="book-item">
        <div className="image-container">
          <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="book" />
        </div>
        <div className="book-info">
          <h3>{item.volumeInfo.title ? item.volumeInfo.title : 'Title'}</h3>
          {item.volumeInfo.authors.map(el => (
            <h5>{el}</h5>
          ))}
        </div>
      </div>
    ))}
  </div>
  );
};

export default BookItem;
