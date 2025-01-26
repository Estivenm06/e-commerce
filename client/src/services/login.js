import axios from 'axios'
const baseUrl = 'https://e-commerce-x5pg.onrender.com/api/login'

export const login = async ({credentials}) => {
    const request = await axios.post(baseUrl, credentials)
    return request.data
}