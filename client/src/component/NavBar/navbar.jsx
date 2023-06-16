import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
        return{
          textDecoration:'none', 
          textUnderlineOffset:'none',
          color: isActive? 'white' : '#212832',
          backgroundColor: isActive? '#5B47FB' : 'white',
        }     
      }

  return (
    <div className="Navbar">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <NavLink to="/" style={navLinkStyle} className="Page">
        <span class="material-symbols-outlined">book</span>
            <div>Read</div>
        </NavLink>
        <NavLink to="/add" style={navLinkStyle} className="Page">
            <span class="material-symbols-outlined">add_circle</span>            
            <div>Create</div>
        </NavLink>
        <NavLink to="/edit" style={navLinkStyle} className="Page">
        <span class="material-symbols-outlined">edit</span>            
            <div>Edit</div>
        </NavLink>
        <NavLink to="/delete" style={navLinkStyle} className="Page">
        <span class="material-symbols-outlined">delete</span>          
            <div>Delete</div>
        </NavLink>
    </div>
  )
}

export default Navbar