import request from '../utils/request'

export function getGithubUser(name){
    return request({
        url: `https://api.github.com/user/${name}`,
        method: 'get',
    })
}