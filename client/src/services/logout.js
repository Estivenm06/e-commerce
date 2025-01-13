import axios from 'axios'
import {getToken} from '../utils/middleware.js'
const baseUrl = 'http://localhost:3001/api/logout'

const token = getToken()

export const logout = async () => {
    const request = await axios.post(baseUrl,{} , {headers: {'Authorization': token}})
    return request.data
}