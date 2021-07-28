import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://shop-react-2c9bc-default-rtdb.firebaseio.com/',
})

export default instance