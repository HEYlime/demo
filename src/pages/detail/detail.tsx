import React, { Fragment, useReducer, useState } from 'react';
import { Card, Table, Divider, Tag, Button, Modal, Input, Select, InputNumber, message, Radio } from 'antd';
const { Option } = Select;

import Styles from './details.less';

interface Props { };

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
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
          <h2>TITLE</h2>
        </div>
        <div className={`${Styles.col}`}>
          <div className={Styles.colItem3}>
            <span className={Styles.labelName}>LABEL1</span>
            <div className={Styles.value}>label value label value</div>
          </div>
          <div className={Styles.colItem3}>
            <span className={Styles.labelName}>LABEL1</span>
            <div className={Styles.value}>label value label value</div>
          </div>
          <div className={Styles.colItem3}>
            <span className={Styles.labelName}>LABEL11111:</span>
            <div className={Styles.value}>label value label value</div>
          </div>
          <div className={Styles.colItem3}>
            <span className={Styles.labelName}>LABEL111111:</span>
            <div className={Styles.value}>label value label value</div>
          </div>
          <div className={Styles.colItem3}>
            <span className={Styles.labelName}>LABEL111111:</span>
            <div className={Styles.value}>label value label value</div>
          </div>
          <div className={`${Styles.colItem} ${Styles.empty}`}>
          </div>
          <div className={`${Styles.colItem2}`}>
            <span className={Styles.labelName}>LABEL1</span>
            <div className={Styles.value}>label value label value</div>
          </div>
          <div className={Styles.colItem2}>
            <span className={Styles.labelName}>LABEL1</span>
            <div className={Styles.value}>label value label value</div>
          </div>
          <div className={Styles.colItem}>
            <span className={Styles.labelName}>LABEL1</span>
            <div className={Styles.value}>label value label value</div>
          </div>

          <div className={`${Styles.row2}`}>
            <p >remark</p>
            <div className={Styles.remarkContent}>label value label valuelabel value label valuelabel value label valuelabel value label valuelabel value label valuelabel value label value</div>
          </div>
          <div className={`${Styles.row2}`}>
            <p >img</p>
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

    </Fragment >
  )
}

export default Detail;