 // eslint-disable-next-line
 /*
  *@Author: gu
  *@Date: 2021-06-11 13:37:59
  *@Description: test
 */
  import App from './App';
  import Login from "./components/pages/Login"
  import Error from './components/pages/Error';
  import { Layout, notification } from 'antd';
  import './App.css';
  import './style/index.less';

 
  import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
  
  function Page() {
    const { Header, Content, Footer } = Layout;

    return (
      <div className="Page">
        <Layout>
          <Header className="app_layout_header">
            <h1 className="primary_color">vDrag</h1>
          </Header>
          <Content className="app_layout_content">
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/app" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/404" component={Error} />
                <Route component={Error} />
              </Switch>
            </Router>
          </Content>
          <Footer className="app_layout_foot">
            <h4>vDrag版权所有</h4>
          </Footer>
        </Layout>
      </div>
    );
  }
  
  export default Page;
  