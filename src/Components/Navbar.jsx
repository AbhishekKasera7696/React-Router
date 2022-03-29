import React from 'react';
import { Link } from 'react-router-dom';
import style from "styled-components";

const Style = style(Link)`

margin-right: 2%;
text-decoration:none;
color:black;
`


const Navbar = () => {
  return (
    <div>
       <Style to='/Home'>Home</Style>
      
       <Style to='/Users'>Product</Style>
      
       
    </div>
  )
}

export {Navbar}
