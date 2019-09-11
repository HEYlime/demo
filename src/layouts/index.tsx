import React, { Fragment, useState } from 'react';
import styles from './index.css';
import Footer  from './../components/footer';
import Slider from './../components/slider'


import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Content } = Layout;
const slider = [
  {
    key: '0',
    iconType: 'pie-chart',
    label: 'single',
    pathname: '/'
  },
  {
    key: '1',
    iconType: 'pie-chart',
    label: 'extendsRouters',
    children: [
      {
        key: '1-1',
        label: 'extendsRouters',
        pathname: '/extendsRouters'
      },
    ]
  },
  {
    key: '2',
    iconType: 'desktop',
    label: 'product',
    children: [
      {
        key: '2-1',
        label: 'product',
        pathname: '/product'
      },
    ]
  }
]



// 全局布局，在路由外面套的一层路由。
const BasicLayout: React.FC = props => {

  // 你可能需要针对不同路由输出不同的全局 layout，
  //umi 不支持这样的配置，但你仍可以在 
  //layouts/index.js 对 location.path 做区分，渲染不同的 layout 。
  // if (pathname === '/login') {
  //   return <Fragment>
  //     {children}
  //   </Fragment>
  // }

  return (
    <Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Slider dataSource={slider} />
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            {props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Fragment>

  );
};

export default BasicLayout;
