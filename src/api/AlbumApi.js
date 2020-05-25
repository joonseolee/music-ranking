import {restApi, formatQueryParams} from "./BaseApi";

const params = {
    tag: 'disco',
    api_key: process.env.VUE_APP_API_KEY,
    format: 'json',
    method: 'tag.gettopalbums'
}

const getTopAlbums = () => {
    return restApi(formatQueryParams(params), 'GET')
}

export default getTopAlbums
