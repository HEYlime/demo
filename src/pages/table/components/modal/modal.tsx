
import React, { Fragment, useState } from 'react';
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Checkbox,
  Radio,
  Button,
  AutoComplete,
} from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";
const { Option } = Select;

import Styles from './modal.less'
interface Props extends FormComponentProps {
  visible: boolean,
  handleOk: () => void,
  handleCancel: () => void
};

const EditModal: React.FC<Props> = (props) => {

  const [loading, setLoading] = useState(false);
  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };


  return (
    <Modal
      visible={props.visible}
      title="Title"
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={[
        <Button key="back" onClick={props.handleCancel}>
          RESET
				</Button>,
        <Button key="submit" type="primary" loading={loading} onClick={props.handleOk}>
          CONFIRM
				</Button>,
      ]}
    >
      <div >
        <Form {...formItemLayout} layout="horizontal" onSubmit={handleSubmit}>
          <Form.Item label="Plain Text">
            <span>China</span>
          </Form.Item>

          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  max: 18,
                  message: 'Please input your password!',
                }
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Select" hasFeedback>
            {getFieldDecorator('select', {
              rules: [
                {
                  required: true,
                  message: 'Please select your country!'
                }
              ],
            })(
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="InputNumber">
            {getFieldDecorator('input-number', {
              initialValue: 3
            })(<InputNumber min={1} max={10} />)}
            <span className="ant-form-text"> machines</span>
          </Form.Item>
          <Form.Item label="Radio.Button">
            {getFieldDecorator('radio')(
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}
export default Form.create<any>()(EditModal);