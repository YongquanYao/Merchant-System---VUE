import request from '../utils/request'

export function getGithubUser(name){
    return request({
        url: `/github/users/${name}`,
        method: 'get',
    })
}