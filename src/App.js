import React from 'react';
import {ResetGlobalStyle} from './statics/css/reset';
import {CommonGlobalStyle} from './statics/css/common';
import './statics/css/iconfont.css';
import Header from './common/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
function App() {
  return (
    <div>
      <ResetGlobalStyle/>
      <CommonGlobalStyle/>
      <Header/>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/detail" component={Detail}/>
      </Router>
    </div>
  )
}

export default App;
