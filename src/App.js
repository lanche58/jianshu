import React from 'react';
import {ResetGlobalStyle} from './statics/css/reset';
import {CommonGlobalStyle} from './statics/css/common';
import './statics/css/iconfont.css';
import Header from './common/header';
function App() {
  return (
    <div>
      <ResetGlobalStyle/>
      <CommonGlobalStyle/>
      <Header/>
    </div>
  )
}

export default App;
