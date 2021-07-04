import axios from 'axios'
import {ElMessage } from 'element-plus'
// 请求拦截
axios.interceptors.request.use(
    (confing) => {
        //设置请求头
        if (localStorage.eToken) {
            confing.headers.Authorization = "Bearer " + localStorage.eToken
        }

        return confing
    },
    (error) => {
        return Promise.reject(error)
    }
)



axios.interceptors.response.use(response=>{
    if(response.status == 200 && response.data.status != 401 && response.data.status != 403 && response.status != 400){
        return response
    }else{
        ElMessage.error("权限不足")
    }
})



export default axios