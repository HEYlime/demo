/*
 * @Description: 
 * @version: 
 * @Company: RAYTY
 * @Author: HEYlime
 * @Date: 2019-09-11 10:30:23
 * @LastEditors: HEYlime
 * @LastEditTime: 2019-09-12 09:43:43
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true,
        dynamicImport: false
      },
      dynamicImport: { webpackChunkName: true },
      title: 'demo',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
