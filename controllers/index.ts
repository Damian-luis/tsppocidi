import { getUserById } from "../services"
import { Request,Response } from "express"
async function getUser(req:Request,res:Response){
    const id=req.params.id
    const data=await getUserById(id)
    if(!data){
        res.status(200).json({
            message:'cant find user'
        })
    }
    else{
        res.status(200).send(data)
    }
}

export {getUser}