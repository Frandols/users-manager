import axios from 'axios'

import { toast } from 'react-hot-toast'

const useAxiosInterceptors = () => {
  axios.interceptors.response.use(null, (error) => {
    toast.error(error.response.data)

    return Promise.reject(error)
  })
}

export default useAxiosInterceptors
