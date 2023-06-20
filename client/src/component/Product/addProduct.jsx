import { useState, useEffect } from 'react'
import Axios from "axios"
import React from 'react'


const AddProduct = () => {

    const [user, setUser] = useState([])
    const [addImg, setAddImg] = useState('')
    const [addName, setAddName] = useState('')
    const [addBrand, setAddBrand] = useState('')
    const [addPrice, setAddPrice] = useState('')
    const [addPriceSell, setAddPriceSell] = useState('')
    const [addBestSeller, setAddBestSeller] = useState('')
    const [addSize, setAddSize] = useState('')
    const [addDesc, setAddDesc] = useState('')
    const [addDoday, setAddDoday] = useState('')
    const [addMaumat, setAddMaumat] = useState('')
    const [addLoaimay, setAddLoaimay] = useState('')
    const [addSizeday, setAddSizeday] = useState('')
    const [addChongnuoc, setAddChongnuoc] = useState('')
    const [addMatkinh, setAddMatkinh] = useState('')
    const [addChatlieuday, setAddChatlieuday] = useState('')
    const [addGenres, setAddGenres] = useState('')

    useEffect(()=>{
      const getUser = async () => {
        const respond = await Axios.get("http://localhost:8000/api/product")
        setUser(respond.data)
      }
      getUser()
    },[])

    const addProduct = async () => {
        const newUser = {
            img: addImg,
            name:addName,
            brand:addBrand,
            price: addPrice,
            priceSell:addPriceSell,
            bestSeller: addBestSeller,
            size: addSize,
            desc: addDesc,
            doday: addDoday,
            maumat: addMaumat,
            loaimay: addLoaimay,
            sizeday: addSizeday,   
            chongnuoc: addChongnuoc,
            matkinh: addMatkinh,
            chatlieuday: addChatlieuday,
            genres: addGenres,
        }
        setUser([...user,newUser])
        const respond = Axios.post("http://localhost:8000/api/product",newUser).then((rs)=>{
            if(rs){
                setUser([...respond.data,newUser])
            }
        })
    }



  return (
    <div className="userPage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h1>Add Product</h1>
        <div className="table">
            <h3>
                <div className='title'>Product Data<span class="material-symbols-outlined">watch_screentime</span></div>
                <input type="text" placeHolder="Image..." value={addImg} onChange={(e)=>setAddImg(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Name..." value={addName} onChange={(e)=>setAddName(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Brand..." value={addBrand} onChange={(e)=>setAddBrand(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Price..." value={addPrice} onChange={(e)=>setAddPrice(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="PriceSell..." value={addPriceSell} onChange={(e)=>setAddPriceSell(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Sale..." value={addBestSeller} onChange={(e)=>setAddBestSeller(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Size..." value={addSize} onChange={(e)=>setAddSize(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Description..." value={addDesc} onChange={(e)=>setAddDesc(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Độ Dày..." value={addDoday} onChange={(e)=>setAddDoday(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Màu mặt..." value={addMaumat} onChange={(e)=>setAddMaumat(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Loại Máy..." value={addLoaimay} onChange={(e)=>setAddLoaimay(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Size Dây..." value={addSizeday} onChange={(e)=>setAddSizeday(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Chống Nước..." value={addChongnuoc} onChange={(e)=>setAddChongnuoc(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Mắt Kính..." value={addMatkinh} onChange={(e)=>setAddMatkinh(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Chất Liệu Dây..." value={addChatlieuday} onChange={(e)=>setAddChatlieuday(e.target.value)} className="addInput"/>
                <input type="text" placeHolder="Genres..." value={addGenres} onChange={(e)=>setAddGenres(e.target.value)} className="addInput"/>
                <button onClick={addProduct}>Add</button>
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
                    <div className="colTitle colTitle9">Màu Mặt</div> 
                    <div className="colTitle colTitle10">Loại Máy</div> 
                    <div className="colTitle colTitle11">Size Dây</div> 
                    <div className="colTitle colTitle12">Chống Nước</div> 
                    <div className="colTitle colTitle13">Mắt Kính</div> 
                    <div className="colTitle colTitle14">Chất Liệu Dây</div> 
                    <div className="colTitle colTitle15">Genres</div> 
                </div>
                {user.map((item)=>{
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

export default AddProduct