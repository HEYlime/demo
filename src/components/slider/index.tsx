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

  const renderMenuItem = (childs: any) => {
    return (
      childs.map((item: any) => {
        return (
          <Menu.Item
            key={item.key}
            onClick={() => { router.push({ pathname: item.pathname }) }}
          >{item.label}</Menu.Item>
        )
      })
    )
  }
  const renderMenu = () => {
    return (
      dataSource.map((menu: any) => {
        if (menu.children) {
          return (
            <SubMenu
              key={menu.key}
              title={
                <span>
                  <Icon type={menu.iconType} />
                  <span>{menu.label}</span>
                </span>
              }
            >
              {renderMenuItem(menu.children)}
            </SubMenu>
          )
        } else {
          return (
            <Menu.Item key={menu.key} onClick={() => { router.push({ pathname: menu.pathname }) }}>
              <Icon type={menu.iconType} />
              <span>{menu.label}</span>
            </Menu.Item>
          )
        }
      })
    )
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {renderMenu()}
      </Menu>
    </Sider>
  );
};

export default Slider;
