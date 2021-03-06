import { ProductRepository } from "../repositories/Product.repository"
import { Request, Response } from "express"
import { ProductModel } from "../entities/Product";
import { getModelForClass } from "@typegoose/typegoose";
import {createResponse} from "../Utils/Response.custom";

const repository = new ProductRepository(ProductModel)

export let createProduct = async (req: Request, res: Response) =>{
    const product = req.body
    const result = await repository.create(product)
    if (Boolean(result)) {
        const newProduct = await repository.findOne({_id:result})
        return createResponse(res,"Product created",newProduct,200)
    }else{
        return createResponse(res,"Error creating product in db",undefined,500)
    }
}
export let deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await repository.delete(id)
    if (result) {
        return createResponse(res,`Deleted ${id} Successfully`,undefined,200)
    }
    return createResponse(res,"Delete Operation Failed",undefined,500)
}
export let getAllProducts = async (req: Request, res: Response) => {
    const query = {}
    const result = await repository.find(query)
    if (result) {
        if (result.length>0) {
            return createResponse(res,"Products found",result,200)
        }
        return createResponse(res,"Fatal error occured",undefined,500)
    }
    return createResponse(res,"Fatal error occured",undefined,500)
}
export let updateProduct = async (req: Request, res: Response) => {
    const id = String(req.query.id)
    const update = req.body
    const result = await repository.update(id, update)
    if (Boolean(result)) {
        // console.log(result.firstname)
        return createResponse(res,"Product found",result,200)
    } else {
        return createResponse(res,"Product not found/updated",undefined,404)
    }
}
export let getProductbyId = async (req: Request, res: Response) => {
    const id = req.query.id
    const result = await repository.findOne({ _id: id })
    // console.log(Boolean(result))
    if (Boolean(result)) {
        // console.log(result.firstname)
        return createResponse(res,"Product found",result,200)
    } else {
        return createResponse(res,"Product not found",undefined,404)
    }
}
export let getProducts = async (req: Request, res: Response) => {
    const query = req.body
    // console.log(query)
    const result = await repository.find(query)
    // console.log(Boolean(result))
    if (result) {
        if (result.length>0) {
            // console.log("done")
            return createResponse(res,"Products found",result,200)
        } else {
            return createResponse(res,"Products not found",undefined,404)
        }
    }
    return createResponse(res,"Fatal error occured",undefined,500)
}
export let getNProducts = async (req: Request, res:Response)=>{
    const query = req.body
    if (req.params.limit !="" && !isNaN(Number(req.params.limit))) {
        const limit = Number(req.params.limit)
        const result = await repository.findN(query,limit)
        // console.log(result)
        if (result) {
            if(result.length>0){
                return createResponse(res,"Products found",result,200)
            }else{
                return createResponse(res,"products not found",undefined,404)
            }
        }
        return createResponse(res,"Parameter not found",undefined,500)
    }else{
        return createResponse(res,"Parameter not found",undefined,500)
    }
}
export let getProductsByFarmer = async (req: Request, res:Response) => {
    const farmerid = req.body.id
    const result = await repository.getProductsByFarmer(farmerid)
    if (Boolean(result)) {
        return createResponse(res,"Products found",result,200)
    }
    return createResponse(res,"Error getting products",undefined,500)
}
export let restockProduct = async (req: Request, res:Response) => {
    const productid = req.body.id
    const stock = Number(req.body.stock)
    const harvest = new Date(req.body.harvest)
    const result = await repository.restockProducts(productid,stock,harvest)
    if (Boolean(result)) {
        return createResponse(res,"Stock details updated",result,200)
    }
    return createResponse(res,"Error updating stock details",undefined,500)
}
export let updateRestockStatus = async (req: Request, res:Response) => {
    const productid = req.body.id
    const status = String(req.body.status)
    const result = await repository.updateRestockStatus(productid,status)
    if (Boolean(result)) {
        return createResponse(res,"Stock details updated",result,200)
    }
    return createResponse(res,"Error updating stock details",undefined,500)
}
export let getProductsByCategory = async (req: Request, res:Response) => {
    const categories:string[] = req.body.category
    const result = await repository.getProductsByCategory(categories)
    if (result) {
        if (result.length>0) {
            return createResponse(res,"Products found",result,200)
        }
        return createResponse(res,"Products not found/error occured",undefined,404)
    }
    return createResponse(res,"Error updating stock details",undefined,500)
}
