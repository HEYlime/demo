import React, { Fragment, useState } from 'react';
import { Icon, Button, Input, Select, InputNumber, DatePicker, Cascader } from 'antd';
const { Option } = Select;
import Styles from './update.less';

interface Props {
}
interface ArrayItem {
  code: string,
  name: string,
  items: Array<ArrayItem>
}
const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'Jiangsu1',
    name: 'Jiangsu',
    items: [
      {
        code: 'Nanjing1',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
function onChange(value, selectedOptions) {
  console.log(value);
  console.log(selectedOptions)
}


const Update: React.FC<Props> = (props) => {
  return (
    <Fragment>
      {/* 返回 */}
      <div className={Styles.backRow}>
        <Icon type="left" style={{ marginRight: 8 }} />
        <span>返回</span>
      </div>
      {/* 客户信息 */}
      <div className={Styles.contentItem}>
        <div className={Styles.title}>
          <div>
            <img src="" alt="" />
            <span className={Styles.leftLabel}>客户信息</span>
          </div>
          <div>
            <Button type="primary">Primary</Button>
          </div>
        </div>
        <div className={Styles.colContent}>
          <div className={Styles.col2}>
            <span className={Styles.colLabel}>客户姓名</span>
            <Input placeholder="default size"></Input>
          </div>
          <div className={Styles.col2}>
            <span className={Styles.colLabel}>客户姓名</span>
            <Input placeholder="default size"></Input>
          </div>

          <div className={Styles.col2}>
            <span className={Styles.colLabel}>区域</span>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              style={{ width: '400px' }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </div>
          <div className={Styles.col2}>
            <span className={Styles.colLabel}>年龄</span>
            <InputNumber min={1} max={100000} defaultValue={3} style={{ width: '400px' }} />
          </div>
          <div className={`${Styles.row2}`}>
            <p >身份证图片</p>
            <div className={Styles.imgContent}>
              <div className={Styles.imgWrapper}>
                <img src="" className={Styles.delImg} alt="" />
                <img src="" className={Styles.imgShow} alt="" />
              </div>
              <div className={Styles.imgWrapper}>
                <img src="" className={Styles.delImg} alt="" />
                <img src="" className={Styles.imgShow} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={Styles.contentItem}>
        <div className={Styles.title}>
          <div>
            <img src="" alt="" />
            <span className={Styles.leftLabel}>客户信息</span>
          </div>
          <div>
            <span>edit</span>
          </div>
        </div>
        <div className={Styles.colContent}>
          <div className={Styles.directionColumn2}>
            <span>渠道公司</span>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              style={{ width: '400px' }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </div>
          <div className={Styles.directionColumn2}>
            <span>日期：</span>
            <DatePicker placeholder="Select" style={{ width: 400 }} />
          </div>
          <div className={Styles.directionColumn2}>
            <span>区域</span>
            <Cascader
              defaultValue={['zhejiang', 'hangzhou', 'xihu']}
              fieldNames={{ label: 'name', value: 'code', children: 'items' }}
              options={options}
              onChange={onChange}
              placeholder="Please select"
              style={{ width: 400 }}
            />
          </div>
          <div className={Styles.directionColumn2}>
            <span>渠道公司</span>
            <Input placeholder="请输入" style={{ width: 400 }}></Input>
          </div>
          <div className={Styles.directionColumn2}>
            <span>渠道公司</span>
            <Input placeholder="请输入" style={{ width: 400 }}></Input>
          </div>
          <div className={Styles.empty}></div>
        </div>

      </div>

    </Fragment>
  )
}

export default Update;