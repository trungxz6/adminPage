import React from 'react'
import Header from '../Header/header' 
import Navbar from '../NavBar/navbar' 
import AddUser from '../User/addUser'
import AddProduct from '../Product/addProduct'


const AddPage = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <AddUser/>
        <AddProduct/>
    </div>
  )
}

export default AddPage