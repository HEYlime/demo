import React, { Fragment, useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import router from 'umi/router';
const { Sider } = Layout;
const { SubMenu } = Menu;


interface Slider {
  dataSource: Array<object>
}

const Slider: React.FC<Slider> = props => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(collapsed);
  };

  const dataSource = props.dataSource;
  console.log(dataSource)

  const renderMenuItem = (childs: any) => {
    return (
      childs.map((item: any) => {
        return (
          <Fragment>
            <Menu.Item 
              key={item.key} 
              onClick={() => {router.push({pathname: item.pathname})}}
            >{item.label}</Menu.Item>
          </Fragment>
          
        )
      })
    )
  }

  const renderMenu = () => {
    dataSource.map((menu: any) => {
      if(menu.children){
        return (
          <Fragment>
            <SubMenu
              key={menu.key}
              title = {
                <span>
                  <Icon type={menu.iconType} />
                  <span>{menu.label}</span>
                </span>
              }
            >
              {renderMenuItem(menu.children)}
            </SubMenu>
          </Fragment>
        )
      }else {
        return (
          <Fragment>
            <Menu.Item key={menu.key} onClick={() => {router.push({pathname: menu.pathname})}}>
              <Icon type={menu.iconType} />
              <span>{menu.label}</span>
            </Menu.Item>
          </Fragment>
        )
      }
    })
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {
          dataSource.map((item: any) => {
            return (
              <SubMenu
                key={item.key}
                title={
                  <span>
                    <Icon type={item.iconType} />
                    <span>{item.label}</span>
                  </span>
                }
              >
                {item.children.map((itm: {key: string, label: string, pathname: string}) => {
                  return (
                    <Menu.Item key={itm.key} onClick={() => {router.push({pathname: itm.pathname})}}>{itm.label}</Menu.Item>
                  )
                })}
              </SubMenu>
            )
          })
        }

        
        {/* {renderMenu()} */}
        {/* 
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
              <span>Team</span>
            </span>
          }
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9"> 
          <Icon type="file" />
          <span>File</span>
        </Menu.Item>*/}
      </Menu>
    </Sider>
  );
};

export default Slider;
