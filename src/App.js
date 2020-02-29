import React from 'react';
import './App.css'
import SetStatePage from './pages/SetStatePage'
import HocPage from './pages/HocPage'
import FormPage from './pages/FormPage'
import FormPage1 from './pages/FormPage1'
import MyFormPage from './pages/MyFormPage'
import DialogPage from './pages/DialogPage';

function App() {
  return (
    <div>
      {/* <SetStatePage /> */}

      {/* 高阶组件 */}
      {/* <HocPage/> */}

      {/* 表单组件 */}
      {/* <FormPage/> */}

      {/* 表单组件 使用create */}
      {/* <FormPage1/> */}

      {/* 表单组件 自己创建的 */}
      <MyFormPage/>

      {/* 模态框 */}
      <DialogPage/>
    </div>
  );
}

export default App;
