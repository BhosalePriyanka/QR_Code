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
    try{
        const text = req.body.text
  
    if(!text){
        // res.json({error:'Enter Text'})
        throw new Error('Enter text...')
    }
    qrcode.toDataURL(text,(err, src)=>{
        if(err){
            res.json({error:err.message})
        }
   res.json(src)
    })

    }
    catch(error){
        res.json({error:error.message})

    }
    
})