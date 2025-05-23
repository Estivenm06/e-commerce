import axios from "axios"
import { getToken } from "../utils/middleware.js"
const baseUrl = '/api/carts'

const token = getToken()

export const getAllCart = async (id) => {
    const request = await axios.get(`${baseUrl}?userId=${id}`)
    return request.data
}

export const createOneCart = async (products) => {
    const request = await axios.post(baseUrl, {products: products}, {headers: {'Authorization': token}})
    
    return request.data
}

export const updateOneCart = async ({id, body}) => {
    const request = await axios.put(`${baseUrl}/${id}`, body, {headers: {'Authorization': token}})
    return request.data
}

export const deleteOneCart = async (id) => {
    const request = await axios.delete(`${baseUrl}/${id}`, {headers: {'Authorization': token}})
    return request.data
}