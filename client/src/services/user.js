import axios from 'axios'
import {getToken} from '../utils/middleware.js'
const baseUrl = 'http://localhost:3001/api/users'

const token = getToken()

export const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

export const getOne = async ({id}) => {
    const request = await axios.get(`${baseUrl}/${id}`)
    return request.data
}

export const createOne = async ({body}) => {
    const request = await axios.post(baseUrl, body)
    return request.data
}

export const updateOne = async ({id, body}) => {
    const request = await axios.put(`${baseUrl}/${id}`, body, {headers: {'Authorization': token}})
    return request.data
}

export const deleteOne = async ({id}) => {
    const request = await axios.delete(`${baseUrl}/${id}`, {headers: {'Authorization': token}})
    return request.data
}