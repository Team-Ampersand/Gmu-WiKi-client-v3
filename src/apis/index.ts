import axios from 'axios'
import EnvConfig from './EnvConfig'

const API = axios.create({
  baseURL: EnvConfig.GMUWIKI_SERVER_URL,
  withCredentials: true,
})

export default API
