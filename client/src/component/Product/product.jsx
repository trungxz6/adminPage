import { useState, useEffect } from 'react'
import Axios from "axios"
import React from 'react'

const Product = () => {

    const [user, setUser] = useState([])
    const [isSearch, setIsSearch] = useState('');
    const [searchArray, setSearchArray] = useState([]);

    useEffect(()=>{
      const getUser = async () => {
        const respond = await Axios.get("http://localhost:8000/api/product")
        setUser(respond.data)
      }
      getUser()
    },[])

    const handleSearch= (brandName) => {
      const filterSearch = user.filter(item => item.brand.toLowerCase().includes(brandName.toLowerCase()));
      setIsSearch(brandName);
      setSearchArray(filterSearch);
    }


  return (
    <div className="userPage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h1>Product</h1>

        <div className="table">
            <h3>
                <div className='title'>Product Data<span class="material-symbols-outlined">watch_screentime</span></div>
                <input placeholder='Search...' onChange={(e) => { handleSearch(e.target.value) }}></input>
            </h3>
            <div className="userTable">
            <div className="tableHeader"> 
              <div className="colTitle colTitle1">Img</div> 
              <div className="colTitle colTitle2">Name</div> 
              <div className="colTitle colTitle3">Brand</div> 
              <div className="colTitle colTitle4">Price</div> 
              <div className="colTitle colTitle5">Price Sell</div> 
              <div className="colTitle colTitle6">Best Seller</div> 
              <div className="colTitle colTitle7">Size</div> 
              <div className="colTitle colTitle17">Description</div> 
              <div className="colTitle colTitle8">Độ Dày</div> 
              <div className="colTitle colTitle9">Mẫu Mắt</div> 
              <div className="colTitle colTitle10">Loại Máy</div> 
              <div className="colTitle colTitle11">Size Dây</div> 
              <div className="colTitle colTitle12">Chống Nước</div> 
              <div className="colTitle colTitle13">Mắt Kính</div> 
              <div className="colTitle colTitle14">Chất Liệu Dây</div> 
              <div className="colTitle colTitle15">Genres</div> 
            </div> 
            {isSearch ? searchArray.map((item)=>{
              return( 
                <div className="tableRow"> 
                  <div className="colTitle colTitle1"><img src={item.img} alt="watch" className='image'/></div> 
                  <div className="colTitle colTitle2">{item.name}</div> 
                  <div className="colTitle colTitle3">{item.brand}</div> 
                  <div className="colTitle colTitle4">{item.price}</div> 
                  <div className="colTitle colTitle5">{item.priceSell}</div> 
                  <div className="colTitle colTitle6">{item.bestSeller}</div> 
                  <div className="colTitle colTitle7">{item.size}</div> 
                  <div className="colTitle colTitle17">{item.desc}</div> 
                  <div className="colTitle colTitle8">{item.doday}</div> 
                  <div className="colTitle colTitle9">{item.maumat}</div> 
                  <div className="colTitle colTitle10">{item.loaimay}</div> 
                  <div className="colTitle colTitle11">{item.sizeday}</div> 
                  <div className="colTitle colTitle12">{item.chongnuoc}</div> 
                  <div className="colTitle colTitle13">{item.matkinh}</div> 
                  <div className="colTitle colTitle14">{item.chatlieuday}</div> 
                  <div className="colTitle colTitle15">{item.genres}</div> 
                </div> 
                )
            })
            : user.map((item)=>{ 
              return( 
                <div className="tableRow"> 
                  <div className="colTitle colTitle1"><img src={item.img} alt="watch" className='image'/></div> 
                  <div className="colTitle colTitle2">{item.name}</div> 
                  <div className="colTitle colTitle3">{item.brand}</div> 
                  <div className="colTitle colTitle4">{item.price}</div> 
                  <div className="colTitle colTitle5">{item.priceSell}</div> 
                  <div className="colTitle colTitle6">{item.bestSeller}</div> 
                  <div className="colTitle colTitle7">{item.size}</div> 
                  <div className="colTitle colTitle17">{item.desc}</div> 
                  <div className="colTitle colTitle8">{item.doday}</div> 
                  <div className="colTitle colTitle9">{item.maumat}</div> 
                  <div className="colTitle colTitle10">{item.loaimay}</div> 
                  <div className="colTitle colTitle11">{item.sizeday}</div> 
                  <div className="colTitle colTitle12">{item.chongnuoc}</div> 
                  <div className="colTitle colTitle13">{item.matkinh}</div> 
                  <div className="colTitle colTitle14">{item.chatlieuday}</div> 
                  <div className="colTitle colTitle15">{item.genres}</div> 
                </div> 
                )
              })}

            </div>
        </div>
    </div>
  )
}

export default Product