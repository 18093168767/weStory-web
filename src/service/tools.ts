/*
 * @Author: your name
 * @Date: 2021-10-12 11:27:02
 * @LastEditTime: 2021-10-15 09:46:19
 * @LastEditors: Please set LastEditors
 * @Description: http通用工具函数
 * @FilePath: \ourstory\src\service\tools.ts
 */

 import axios from 'axios';
 import { message } from 'antd';
 import getConfig from '../config/index' // 接口前缀

//  const URLPATH = process.env.REACT_APP_ENV
//  console.log(URLPATH)
 let Api = ""; // 接口地址获取
if (process.env.REACT_APP_ENV === "development") {
    Api = "api/";
} else {
    Api = "v1/";
}
 interface IFRequestParam {
     url: string;
     msg?: string;
     config?: any;
     data?: any;
 }
 /**
  * 公用get请求
  * @param url       接口地址
  * @param msg       接口异常提示
  * @param headers   接口所需header配置
  */
 export const get = ({ url, msg = '接口异常', config }: IFRequestParam) => {
    const URL = Api + url
    return axios
         .get(URL, config)
         .then((res: { data: any; }) => res)
         .catch((err: any) => {
             console.log(err);
             message.warn(msg);
         })
 };
 
 /**
  * 公用post请求
  * @param url       接口地址
  * @param data      接口参数
  * @param msg       接口异常提示
  * @param headers   接口所需header配置
  */
 export const post = ({ url, data, msg = '接口异常', config }: IFRequestParam) => {
    const URL = Api + url
    return axios
    .post(URL, data, config)
    .then((res: { data: any; }) => {
        return res
    })
    .catch((err: any) => {
        console.log(err);
        message.warn(msg);
    })
 };
 
