import axios from 'axios'
import config from '@/config'

const instance = axios.create({
    baseURL: config.api,
    timeout: 10000
  });

export default instance