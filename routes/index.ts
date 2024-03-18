import express from 'express'
import { getUser } from '../controllers'
const Router=express.Router()

Router.get('/getUser/:id',getUser)

export default Router