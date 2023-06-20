const express = require('express')
const app =express()
const mongoose = require('mongoose')
const cors=require('cors')
app.use(express.json())
app.use(cors())
require('./user/userDetail')
 mongoUrl = "mongodb+srv://phamnhatnam090703:ngay09072003@cluster0.l5yapuq.mongodb.net/?retryWrites=true&w=majority"

 mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(()=>{
    console.log("connected to database")
 }).catch((e)=>console.log(e))
 const user = mongoose.model("userInfo")
app.post("/SignUp",async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const oldUser=await user.findOne({email})
        if(oldUser){
            return res.json("account used")
        }else{
            await user.create({
                name: name,
                email:email,
                password:password,
                address: '',
                phoneNumber: '',
            })
            res.json("created")
        }
    } catch (error) {
        res.json("error")
    }
})
app.post("/SignIn",async(req,res)=>{
    const {email,password}=req.body
    try {
        const account = await user.findOne({email})
        if(!account){
            return res.json("user not found")
        }
        const userPw=await account.password
        if(password===userPw){
            res.json({
                status: "success",
                id: account._id,
            })
        }
    } catch (error) {
        res.json("error")
    }
})
app.get('/:id/account',async(req,res)=>{
    const account = await user.findById(req.params.id)
    try {
        res.json(account)
    } catch (error) {
        res.json("error")
    }
})
app.post('/:id/account/password',async(req,res)=>{
    const {name,password,address,phoneNumber}=req.body;
    try {
         await user.findByIdAndUpdate((req.params.id),{
            $set:{
                password: password,
            }
    })
    res.json({
        status: 'success',
        data: await user.findById(req.params.id),
        newPassword: password,
    })
}catch (error) {
        res.json("error form")
    }
})
app.post('/:id/account/address',async(req,res)=>{
    const {address}=req.body;
    try {
         await user.findByIdAndUpdate((req.params.id),{
            $set:{
                address: address,
            }
    })
    res.json({
        status: 'success',
        data: await user.findById(req.params.id),
    })
}catch (error) {
        res.json("error form")
    }
})
app.post('/:id/account/phoneNumber',async(req,res)=>{
    const {phoneNumber}=req.body;
    try {
         await user.findByIdAndUpdate((req.params.id),{
            $set:{
                phoneNumber: phoneNumber,
            }
    })
    res.json({
        status: 'success',
        data: await user.findById(req.params.id),
    })
}catch (error) {
        res.json("error form")
    }
})

app.get('/',  async (req, res) => {
    const account = await user.find()
    try {
        res.json(account)
    } catch (error) {
        res.json("error")
    }
}),
app.listen(4040,()=>{
    console.log("listening on port 4040")
})