/*
 * @Author: your name
 * @Date: 2021-10-12 11:33:29
 * @LastEditTime: 2021-10-15 09:47:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ourstory\src\config\index.js
 */
module.exports = {
    development: {
      API: 'http:127.0.0.1:8084',
      PORT: 3000,
      VERSION: '0.0.1',
      MODE: 'development',
      NODE_ENV: 'production'
    },
    production: {
      API: 'http://192.168.43.142:8084/',
      PORT: 3000,
      VERSION: '0.0.1',
      MODE: 'production',
      NODE_ENV: 'production'
    }
  }