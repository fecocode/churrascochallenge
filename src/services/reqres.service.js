import trae from 'trae'

import config from './config'

const reqresService = trae.create({
    baseUrl: config.apiURL
})

export default reqresService