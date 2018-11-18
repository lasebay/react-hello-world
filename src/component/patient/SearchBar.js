import React from 'react'
import Popup from "reactjs-popup";
import Search from "react-search-box";
import dashReducer from '../../reducer/dashReducer';

const SearchBar = ({data}) => {
  console.log("name", data)
  return (
  <div>
    {data.name} 
  </div>
  )
}
export default SearchBar
