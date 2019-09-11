/*
 * @Description: 
 * @version: 
 * @Company: RAYTY
 * @Author: HEYlime
 * @Date: 2019-09-11 10:30:23
 * @LastEditors: HEYlime
 * @LastEditTime: 2019-09-11 10:30:23
 */
// 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
