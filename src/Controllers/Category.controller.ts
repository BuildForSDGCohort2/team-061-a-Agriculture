import {CategoryRepository} from "../repositories/Category.repository"
import {Request, Response} from "express"
import { Category } from "../entities/Category";
import { getModelForClass } from '@typegoose/typegoose'

const repository = new CategoryRepository(getModelForClass(Category))

export let deleteCategory = async (req:Request, res:Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (!result) return res.status(400).send('Bad request. Operation failed')
    return res.send(`Delete ${id} Successfully`)
}

export let updateCategory = async (req:Request, res:Response) => {
    const id = String(req.params.id)
    const updateCategory = req.body
    const result = await repository.update(id, updateCategory)

    //Object to update
    if (!result) return res.status(400).send('Bad request. Unable to update')
    return res.send(`Update ${id} Successful`)
}

export let getAllCategory = async (req:Request, res:Response) => {
    const query = {}
    const result = repository.find(query)
    if (!result) return res.status(400).send('No Categories Available')
    return res.send(result)

}

export let getCategoryById = async (req:Request, res:Response) => {
    const id = req.query.id
    const result = await repository.findOne({_id: id})
    if (!result) return res.status(400).send("Invalid Category")
    return res.send(result)
}

export let getCategory = async (req: Request, res:Response) => {
    const query = req.body
    // console.log(query)
    if (req.params.limit !="") {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query,limit)
        console.log(result)
        if(result) {
            return res.send(result)
        }
    } else {
        const result = await repository.find(query)
        console.log(Boolean(result))
        
        if(result){
            console.log("done")
            return res.send(result)
        }else{
            return res.status(404).send({message:"Category not found"})
        }
    }
}