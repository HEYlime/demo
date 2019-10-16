import React, { Fragment, useReducer, useState } from 'react';
import { Card, Table, Divider, Tag, Button, Modal, Input, Select, InputNumber, message, Radio, Icon } from 'antd';
const { Option } = Select;

import Styles from './details.less';

interface Props { };

const columns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '操作人',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '部门',
    dataIndex: 'organ',
    key: 'organ',
  },
  {
    title: '操作',
    dataIndex: 'audit',
    key: 'audit',
    render: (audit: number) => {
      console.log(audit);
      let str: string = '';
      let color: string = '';
      if (audit == 0) {
        str = '驳回';
        color = 'red';
      } else if (audit == 1) {
        str = '通过';
        color = "green";
      } else if (audit == 2) {
        str = '待审核';
        color = "orange";
      }
      console.log(color);
      return (
        < Tag color={color} >
          {str}
        </Tag >
      )
    }
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },

  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Find</a>
        <Divider type="vertical" />
        <a>Select</a>
        <Divider type="vertical" />
        <a>Update</a>
      </span>
    ),
  },
];
const data = [
  {
    key: '1',
    time: '2019-10-12 09:46',
    name: '小样',
    organ: '助理一部',
    audit: 1, // 操作 0 驳回； 1 通过； 2 待审核
    remark: '暂无',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    time: '2019-10-12 09:46',
    name: '小样',
    organ: '助理一部',
    audit: 0, // 操作 0 驳回； 1 通过； 2 待审核
    remark: '暂无',
    tags: ['loser'],
  },
  {
    key: '3',
    time: '2019-10-12 09:46',
    name: '小样',
    organ: '助理一部',
    audit: 2, // 操作 0 驳回； 1 通过； 2 待审核
    remark: '暂无',
    tags: ['cool', 'teacher'],
  },
];


const Detail: React.FC<Props> = props => {

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = e => {
    message.success('handle success');
    setVisible(false);
  };
  const handleCancel = e => {
    message.warning('handle cancel');
    setVisible(false);
  };


  return (
    <Fragment>
      {/* 返回 */}
      <div className={Styles.backRow}>
        <Icon type="left" style={{ marginRight: 8 }} />
        <span>返回</span>
      </div>
      {/* 日志信息 */}
      <div className={Styles.contentItem}>
        <div className={Styles.title}>
          <img src="" alt="" />
          <h2>审核日志信息</h2>
        </div>
        <div className={Styles.table}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
        <div className={Styles.auditButtons}>
          <Button type="primary" onClick={showModal}>Primary</Button>
          <Button>Default</Button>
          <Button type="danger">Danger</Button>
        </div>
      </div>
      {/* 模态框 */}
      <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        width={840}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <div className={Styles.modalContent}>
          <div className={Styles.colItem2}>
            <span>输入框：</span>
            <Input placeholder="default size" />
          </div>
          <div className={Styles.colItem2}>
            <span>选择器：</span>
            <Select defaultValue="lucy" style={{ width: '70%' }} >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className={Styles.colItem2}>
            <span>输入框：</span>
            <Input placeholder="default size" />
          </div>
          <div className={Styles.colItem2}>
            <span>数字输入框：</span>
            <InputNumber min={1} max={100000} defaultValue={3} />
          </div>
          <div className={Styles.colItem2}>
            <span>单选框：</span>
            <Radio.Group >
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
            </Radio.Group>
          </div>
        </div>
      </Modal>
      {/* 详情 */}
      <div className={Styles.contentItem}>
        <div className={Styles.title}>
          <img src="" alt="" />
          <h2>房源信息</h2>
        </div>
        <div className={`${Styles.col}`}>
          <div className={`${Styles.colItem2}`}>
            <span className={Styles.labelName}>楼盘名称：</span>
            <div className={Styles.value}>（虚拟项目）</div>
          </div>
          <div className={Styles.colItem2}>
            <span className={Styles.labelName}>楼栋号：</span>
            <div className={Styles.value}>25#</div>
          </div>
          <div className={`${Styles.colItem2}`}>
            <span className={Styles.labelName}>房源号：</span>
            <div className={Styles.value}>向旭路226号</div>
          </div>
          <div className={Styles.colItem2}>
            <span className={Styles.labelName}>户型：</span>
            <div className={Styles.value}></div>
          </div>
          <div className={`${Styles.colItem2}`}>
            <span className={Styles.labelName}>房源面积(㎡)：</span>
            <div className={Styles.value}>268</div>
          </div>
          <div className={Styles.colItem2}>
            <span className={Styles.labelName}>售价(元)：</span>
            <div className={Styles.value}>4900803</div>
          </div>
        </div>
      </div>
      <div className={Styles.contentItem}>
        <div className={Styles.title}>
          <img src="" alt="" />
          <h2>户型信息</h2>
        </div>
        <div className={`${Styles.col}`}>
          <div className={Styles.colItem}>
            <span className={Styles.labelName}>户型名：</span>
            <div className={Styles.value}>A</div>
          </div>
          <div className={Styles.colItem}>
            <span className={Styles.labelName}>房源类型</span>
            <div className={Styles.value}>A</div>
          </div>
          <div className={Styles.colItem}>
            <span className={Styles.labelName}>户型</span>
            <div className={Styles.value}>3室2厅1卫</div>
          </div>
          <div className={Styles.colItem}>
            <span className={Styles.labelName}>面积(㎡)</span>
            <div className={Styles.value}>128</div>
          </div>
          <div className={`${Styles.colItem}`}>
            <span className={`${Styles.labelName}  ${Styles.theamColor}`}>装修类型</span>
            <div className={`${Styles.value} ${Styles.theamColor}`}>精装修</div>
          </div>
          <div className={Styles.colItem}>
            <span className={`${Styles.labelName} ${Styles.theamColor}`}>首付比例</span>
            <div className={`${Styles.value} ${Styles.theamColor}`}>8%</div>
          </div>
          <div className={`${Styles.row2}`}>
            <p >户型图</p>
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
          <div className={`${Styles.row2}`}>
            <p >remark</p>
            <div className={Styles.remarkContent}>高校邦平台广东开放大学需要做一个课程封面。用在平台首页轮播图的位置。 课程类别（名称）：公共基础课下面具体含2门课：《计算机应用基础》《广东开放大学学习指引》。已和杨俊沟通，请尽量明天上午完成，谢谢 诗冉！请尽量明天上午完成，谢谢诗冉！请尽量明天上午完成，高校邦平台高校邦平台高校邦平台高校邦平台高校邦平台</div>
          </div>

        </div>
      </div>


    </Fragment >
  )
}

export default Detail;