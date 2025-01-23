import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/logout'

const getToken = () => {
    try {
      const user = localStorage.getItem("userLogged");
      return user ? `Bearer ${JSON.parse(user).token}` : `Bearer `;
    } catch (error) {
      console.error('Error getting token from localstorage', error);
      return null
    }
  };

const token = getToken()

export const logout = async () => {
    try{
        const request = await axios.post(baseUrl,{} , {headers: {'Authorization': token}})
        return request.data
    }catch(error){
        console.error('Error during logout', error);
    }
}