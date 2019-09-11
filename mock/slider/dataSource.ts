/*
 * @Description: 
 * @version: 
 * @Company: RAYTY
 * @Author: HEYlime
 * @Date: 2019-09-11 14:18:51
 * @LastEditors: HEYlime
 * @LastEditTime: 2019-09-11 14:47:58
 */

export default {
  '/slider/sliderData': [
    {
      key: '1',
      iconType: 'pie-chart',
      label: 'Option 1'
    },
    {
      key: '2',
      iconType: 'desktop',
      label: 'Option 2'
    },
    {
      key: 'sub1',
      iconType: 'desktop',
      label: 'Option 3',
      children: [
        {
          key: '3',
          label: 'Option 3'
        },
        {
          key: '4',
          label: 'Option 4'
        },
        {
          key: '5',
          label: 'Option 5'
        },
      ]
    },
    {
      key: 'sub2',
      iconType: 'team',
      label: 'Option 4',
      children: [
        {
          key: '6',
          label: 'Option 6'
        },
        {
          key: '6',
          label: 'Option 6'
        },
        {
          key: '7',
          label: 'Option 7'
        },
      ]
    },
    {
      key: '9',
      iconType: 'file',
      label: 'Option 9'
    },


  ]
}