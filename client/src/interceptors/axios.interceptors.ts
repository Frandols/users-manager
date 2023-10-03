import axios from 'axios'

import { toast } from 'react-hot-toast'

const enableAxiosInterceptors = () => {
	axios.interceptors.response.use(null, (error) => {
		toast.error(error.response.data)

		return Promise.reject(error)
	})
}

export default enableAxiosInterceptors
