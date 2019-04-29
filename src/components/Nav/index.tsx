import React from 'react'
import { Menu, Icon } from 'antd';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = (props:any) => {
  console.log("the props of nav", props)
  return (
    <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/post">
          <Link to="/post">Post</Link>
        </Menu.Item>
        <Menu.Item key="/note">
          <Link to="/note">Note</Link>
        </Menu.Item>
      </Menu>
  )
}

const  NavRoute = withRouter(Nav)
export default NavRoute