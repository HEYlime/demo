import React from 'react';
import { Tooltip } from 'antd';
import Styles from './line-wrap.less';

interface Props {
  title: string,
  lineClampNum: number
}

const LineWrap: React.FC<Props> = (props) => {
  const { title, lineClampNum } = props;
  return (
    <Tooltip placement="topLeft" title={title}>
      <span className={Styles.col} style={{ WebkitLineClamp: lineClampNum }}>
        {title}
      </span>
    </Tooltip>
  )
}

export default LineWrap;