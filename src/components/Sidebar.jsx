import { Menu, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import * as icons from '@ant-design/icons';
const { SubMenu } = Menu;
const SideBar = () => {
    return (
        <div className="SideBarBox">
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
            >
                <Menu.Item key="1" icon={<icons.PieChartOutlined />}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<icons.DesktopOutlined />}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<icons.ContainerOutlined />}>
                    Option 3
                </Menu.Item>
                <SubMenu key="sub1" icon={<icons.MailOutlined />} title="Navigation One">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<icons.AppstoreOutlined />} title="Navigation Two">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
      </div>
    );
}

export default SideBar;

