// Base Fetch API

const restApi = (params = '', method = '', headers = '') => {
    return fetch(process.env.VUE_APP_LAST_FM_URL + '/' + process.env.VUE_APP_LAST_FM_VERSION + '/?' + params, {
        method: method,
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            'Content-Type': headers || 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        // body: JSON.stringify(data) || ''
    }).then(res => res.json())
}

const formatQueryParams = (params) => {
    const queryItems = Object.keys(params).map(key => `${key}=${params[key]}`)
    return queryItems.join('&')
}

export {
    restApi,
    formatQueryParams
}
