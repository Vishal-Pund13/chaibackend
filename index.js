require('dotenv').config()
const express = require('express') //(old syntax common JS)
// import express from "express" (new syntax module JS) 
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('vihsallll1')
})

app.get('/youtube', (req,res)=>{
    res.send('You are on Youtube')
})

app.get('/discord', (req,res)=>{
    res.send("<h1>You are on Discord</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})