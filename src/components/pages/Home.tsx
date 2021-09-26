import axios from "axios";
import "../../utils/mock.js";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { Layout, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
const { Header, Content, Sider } = Layout;

function Home() {
  interface ListInterface {
    name: string;
    age: number;
    id: string;
  }
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  };

  let [data, setData] = useState<ListInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const result = await axios.get("/userLists");
      setData(result.data.userinfo);
      setIndex(1);
      setIsLoading(false);
    };
    fetchData();
  }, [index]);

  return (
    <div style={{ height: `100%` }}>
      <Layout>
        <Sider className="site-layout-background" collapsed={collapsed}>
          <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <Sidebar />
        </Sider>
        <Layout>
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <ul>
              {data.map((item, i) => (
                <li key={i}>{item.name}
                </li>
              ))}
            </ul>
          )}
        </Layout>
      </Layout>

    </div>
  );
}
  
export default Home