import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';


const Book = () => {
  const { id } = useParams();
  const ojb = useOutletContext();
  return (
    <h1>Book {id} {ojb.hello}</h1>
  )
}

export default Book