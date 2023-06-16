import { useState, useEffect } from 'react'
import Axios from "axios"
import React from 'react'


const EditProduct = () => {

    const [product, setProduct] = useState([])
    const [crrProductEdit, setCrrProductEdit] = useState('')
    
    useEffect(()=>{
        const getProduct = async () => {
          const respond = await Axios.get("http://localhost:8000/api/product")
          setProduct(respond.data)
        }
        getProduct()
      },[])

    const handleProductInput = (idx) => {
        let item = product[idx-1]
        setCrrProductEdit(item)
        console.log(crrProductEdit)
    }

    const editProduct = async () => { 
        const idx = product.findIndex((item) => item._id === crrProductEdit._id)
        if (idx >= 0) {
            product.splice(idx, 1, crrProductEdit);
            Axios.put(`http://localhost:8000/api/product/${product[idx]._id}`, crrProductEdit)
                .then((res)=> this.setProduct(res.data))
            }
        setProduct([...product])
    }

  return (
    <div className="userPage">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h1>Edit Product</h1>
        <div className="table">
            <h3>
                <div className='title'>Product Data<span class="material-symbols-outlined">watch_screentime</span></div>
                <input type="text" placeHolder="Image..." value={crrProductEdit.img} onChange={(e)=>setCrrProductEdit({...crrProductEdit, img: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Name..." value={crrProductEdit.name} onChange={(e)=>setCrrProductEdit({...crrProductEdit, name: e.target.value})}className="addInput"/>
                <input type="text" placeHolder="Brand..." value={crrProductEdit.brand} onChange={(e)=>setCrrProductEdit({...crrProductEdit, brand: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Price..." value={crrProductEdit.price} onChange={(e)=>setCrrProductEdit({...crrProductEdit, price: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="PriceSell..." value={crrProductEdit.priceSell} onChange={(e)=>setCrrProductEdit({...crrProductEdit, priceSell: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="BestSeller..." value={crrProductEdit.bestSeller} onChange={(e)=>setCrrProductEdit({...crrProductEdit, bestSeller: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Size..." value={crrProductEdit.size} onChange={(e)=>setCrrProductEdit({...crrProductEdit, size: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Description..." value={crrProductEdit.desc} onChange={(e)=>setCrrProductEdit({...crrProductEdit, desc: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Độ Dày..." value={crrProductEdit.doday} onChange={(e)=>setCrrProductEdit({...crrProductEdit, doday: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Màu mặt..." value={crrProductEdit.maumat} onChange={(e)=>setCrrProductEdit({...crrProductEdit, maumat: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Loại Máy..." value={crrProductEdit.loaimay} onChange={(e)=>setCrrProductEdit({...crrProductEdit, loaimay: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Size Dây..." value={crrProductEdit.sizeday} onChange={(e)=>setCrrProductEdit({...crrProductEdit, sizeday: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Chống Nước..." value={crrProductEdit.chongnuoc} onChange={(e)=>setCrrProductEdit({...crrProductEdit, chongnuoc: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Mắt Kính..." value={crrProductEdit.matkinh} onChange={(e)=>setCrrProductEdit({...crrProductEdit, matkinh: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Chất Liệu Dây..." value={crrProductEdit.chatlieuday} onChange={(e)=>setCrrProductEdit({...crrProductEdit, chatlieuday: e.target.value})} className="addInput"/>
                <input type="text" placeHolder="Genres..." value={crrProductEdit.genres} onChange={(e)=>setCrrProductEdit({...crrProductEdit, genres: e.target.value})} className="addInput"/>
                <button onClick={editProduct}>Change</button>
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
                    <div className="colTitle colTitle16" style={{width:"30px",padding:"0px",margin:"0px"}}></div>
                </div>
                {product.map((item, idx)=>{
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
                        <div className="colTitle colTitle16"><button onClick={()=>handleProductInput(idx+1)}>edit</button></div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default EditProduct