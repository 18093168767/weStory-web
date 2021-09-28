// eslint-disable-next-line

import ReactDOM from 'react-dom';
import { AlitaProvider, setConfig } from 'redux-alita';
import './index.css';
import Page from './Page';
import "./utils/axios"

import reportWebVitals from './reportWebVitals';
// setConfig(apis);
ReactDOM.render(
  <AlitaProvider>
    <Page />
  </AlitaProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
