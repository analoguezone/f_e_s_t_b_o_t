import axios from 'axios'
import setupCache from 'axios-local-storage-cache'

let adapter=setupCache({
  ttl:4*60*60*1000
})
const axiosInstance = axios.create({
  adapter,
})
 

export default axiosInstance
