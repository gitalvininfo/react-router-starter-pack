import React from 'react'
import { useOutletContext } from 'react-router-dom'

const NewBook = () => {
  const ojb = useOutletContext();

  return (
    <h1>NewBook {ojb.hello}</h1>
  )
}

export default NewBook