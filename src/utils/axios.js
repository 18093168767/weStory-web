/*
 * @Author: your name
 * @Date: 2021-09-26 16:39:18
 * @LastEditTime: 2021-09-26 16:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\src\utils\axios.js
 */
import Axios from 'axios'
import {Component} from 'react'
Component.prototype.$axios=Axios //将axios挂载到Component上，以供全局使用

//配置过滤器请求响应（通过查npm官网，axios文档）
Axios.interceptors.response.use(function (response) {
    return response.data;//只获取data数据
  }, function (error) {
    return Promise.reject(error);
  });
