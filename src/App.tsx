 // eslint-disable-next-line
 /*
  *@Author: gu
  *@Date: 2021-06-11 13:37:59
  *@Description: test
 */

  import About from './components/pages/About';
  import Shop from './components/pages/Shop';
  import Error from './components/pages/Error';
  import Home from "./components/pages/Home";
  import './App.css';
  import './style/index.less';
  import './style/antd.less';
 
  import {
    HashRouter,
    Route,
    Switch
  } from 'react-router-dom';
  
  function App() {
    return (
      <div className="App">
          <Switch>
            <Route exact  path="/app/" component={Home} />
            <Route exact  path="/app/about" component={About} />
            <Route exact  path="/app/shop" component={Shop} />
            <Route exact  path="/app/home" component={Home} />
          </Switch>
      </div>
    );
  }
  
  export default App;
  