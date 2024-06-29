
import express from "express"
import mongoose from "mongoose"
import morgran from "morgan"

const app = express()


app.listen(4000,()=>{
    console.log('server is running')
})