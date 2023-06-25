import config from 'config'

import axios from 'axios'

const endpoint = config.API_URL + '/tokens'

type Credentials = {
  name: string
  password: string
}

const getToken = async (credentials: Credentials) => {
  const response = await axios.get<string>(endpoint, { params: credentials })

  return response.data
}

export { getToken }
