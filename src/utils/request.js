import axios from 'axios'

/**
 * 公共headers
 */
const headerObj = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
}

const service = axios.create({
    // baseURL:'https://api.github.com/',
    timeout: 500000, // request timeout
    // withCredentials: true,
    headers: headerObj
})

export default service