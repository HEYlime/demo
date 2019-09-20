import React, { Fragment, useState } from 'react';
import styles from './index.css';
import Header from './../components/header';
import Footer from './../components/footer';
import Slider from './../components/slider';
import withRouter from 'umi/withRouter';


import { Layout } from 'antd';

const { Content } = Layout;
const slider = [
  {
    key: '-1',
    iconType: 'pie-chart',
    label: 'single',
    pathname: '/'
  },
  {
    key: 'group1',
    iconType: 'pie-chart',
    label: 'extendsRouters',
    children: [
      {
        key: '11',
        label: 'extendsRouters',
        pathname: '/extendsRouters'
      },
    ]
  },
  {
    key: 'group2',
    iconType: 'desktop',
    label: 'product',
    children: [
      {
        key: '21',
        label: 'product',
        pathname: '/product'
      },
    ]
  },
  {
    key: 'group3',
    iconType: 'pie-chart',
    label: 'table',
    children: [
      {
        key: '31',
        label: 'table',
        pathname: '/table/tableList'
      },
    ]
  },
]

const BasicLayout: React.FC = props => {

  return (
    <Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Slider dataSource={slider} />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px', backgroundColor: 'white' }}>
            {props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Fragment>

  );
};

export default withRouter(BasicLayout);
