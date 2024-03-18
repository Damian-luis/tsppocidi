import { Express } from "express";
import express from 'express'
import {configDotenv} from "dotenv"
import Router from "../routes/index";
class Server{
    public app:Express
    private PORT
    constructor(){
        configDotenv()
        this.app=express()
        this.PORT=process.env.PORT || 3500
        this.routes()
    }
    routes():void{
        this.app.use('/api',Router)
    }
    startApp():void{
        this.app.listen(this.PORT,()=>{
            console.log('running on port '+this.PORT)
        })
    }
}

export default Server