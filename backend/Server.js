const express = require('express')
const app = express()
const cors = require('cors')
const qrcode = require('qrcode')

//middleware
app.use(cors())
app.use(express.json())


app.listen(4000,()=>{
    console.log(`connected to server`)
})

app.get('/api',(req,res)=>{
    res.redirect('https://www.google.com/')
})

app.post('/api',(req,res)=>{
    const text = req.body.text
   
    qrcode.toDataURL(text,(err,src)=>{
        // if(err){
        //    return res.json({err:'Invalid Text'})
        // }
        res.json(src)
        })
   
  
})