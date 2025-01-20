import axios from "axios"
import { getToken } from "../utils/middleware"
const baseUrl = 'http://localhost:3001/api/carts'

const token = getToken()

export const getAllCart = async (id) => {
    const request = await axios.get(`${baseUrl}?userId=${id}`)
    return request.data
}

export const createOneCart = async (item) => {
    const request = await axios.post(baseUrl, item, {headers: {'Authorization': token}})
    return request.data
}

export const updateOneCart = async ({id, body}) => {
    const request = await axios.put(`${baseUrl}/${id}`, body, {headers: {'Authorization': token}})
    return request.data
}

export const deleteOneCart = async ({id}) => {
    const request = await axios.delete(`baseUrl/${id}`, {headers: {'Authorization': token}})
    return request.data
}