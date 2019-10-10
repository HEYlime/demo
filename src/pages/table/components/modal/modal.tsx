
import React, { Fragment, useState } from 'react';
import { Modal, Button, Input } from 'antd';
import Styles from './modal.less'
interface Props {
  visible: boolean,
  handleOk: () => void,
  handleCancel: () => void
};

const EditModal: React.FC<Props> = (props) => {

  const [loading, setLoading] = useState(false);



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
      <div className={Styles.modalBody}>
        <div className={Styles.col1}>
          <span>输入框：</span>
          <Input placeholder="default size" />
        </div>
        <div className={Styles.col1}>
          <span>下拉框：</span>
          <Input placeholder="default size" />
        </div>
        <div className={Styles.col1}>
          <span>多选框：</span>
          <Input placeholder="default size" />
        </div>
        <div className={Styles.col1}>
          <span>联动框1：</span>
          <Input placeholder="default size" />
        </div>
        <div className={Styles.col1}>
          <span>联动框2：</span>
          <Input placeholder="default size" />
        </div>
        <div className={Styles.col1}>
          <span>文本域：</span>
          <Input placeholder="default size" />
        </div>
      </div>
    </Modal>
  )
}
export default EditModal;