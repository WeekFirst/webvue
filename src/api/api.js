import axios from '../config/http'
import base from '../config/base'

/**
 * get方法，对应get请求
 * @desc获取列表
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getClients(data) {
    return axios({
        url: `${base.url}/getClients`,
        method: 'get',
        params: data
    })
}
/**
 * get方法，对应get请求
 * @desc获取单一元素
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getClient(data) {
    return axios({
        url: `${base.url}/client`,
        method: 'get',
        params: {"clientID": data}
    })
}
/**
 * post方法，对应post请求
 * @desc添加元素
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function addClient(data) {
    return axios({
        url: `${base.url}/client`,
        method: 'post',
        params: data
    })
}
/**
 * put方法，对应put请求
 * @desc修改元素
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function putClient(data) {
    return axios({
        url: `${base.url}/client`,
        method: 'put',
        params: data
    })
}
/**
 * delete方法，对应delete请求
 * @desc删除元素
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function deleteClient(data) {
    return axios({
        url: `${base.url}/client`,
        method: 'delete',
        params: {"clientID": data}
    })
}