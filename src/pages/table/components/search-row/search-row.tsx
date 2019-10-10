import React, { Fragment } from 'react';
import Styles from './search-row.less';
import { Input, DatePicker, Cascader, Button, Select } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;

interface Props { };

const SearchRow: React.FC<Props> = (props) => {
  // 时间选择
  const timeChange = function () {

  }
  // 级联选择
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hanzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const cascaderChange = function (value: Array<string>, selectedOptions: any) {
    console.log(value);
    console.log(selectedOptions)
  }

  const selectChage = function () {

  }
  const optionData = [
    {
      value: 'jack',
      text: 'jack'
    },
    {
      value: 'lucy',
      text: 'lucy'
    },
    {
      value: 'tom',
      text: 'tom'
    }
  ];
  const optionStr = optionData.map((option) => {
    return (
      <Option key={option.value} value={option.value}>{option.text}</Option>
    )
  })


  return (
    <Fragment>
      <div className={Styles.container}>
        <div className={Styles.searchItem}>
          <span className={Styles.searchLabel}>
            搜索条件：
          </span>
          <Input placeholder="请输入搜索条件" />
        </div>
        <div className={Styles.searchItem}>
          <span className={Styles.searchLabel}>
            时间：
          </span>
          <RangePicker onChange={timeChange} />
        </div>
        <div className={Styles.searchItem}>
          <span className={Styles.searchLabel}>
            级联选择：
          </span>
          <Cascader options={options} onChange={cascaderChange} changeOnSelect />
        </div>
        <div className={Styles.searchItem}>
          <span className={Styles.searchLabel}>
            选择器：
          </span>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={selectChage}
          >
            {optionStr}
          </Select>
        </div>
        {/* 按钮组 */}
        <div className={Styles.btns}>
          <Button type="primary">Primary</Button>
          <Button type="default">Default</Button>
        </div>
      </div>

    </Fragment>
  )
}

export default SearchRow;