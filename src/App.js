import React from 'react';
// import './index.css';
import styles from './index.module.css'
import logo from './logo.svg';
import './App.css';
const obj = {
  firstName: 'hurry',
  lastName: 'pottry'
}
function formatName(name) {
  return name.firstName + ' ' + name.lastName
}
const greed = <div>jsx对象</div>
    const arr = [0,1,2]
    const show = true
    const name = 'react'
function App() {
  return (
    <div className={styles.app}>
  
      <img src={logo} className={styles.logo}/>
      
      <div>hello ,{name}</div>
      <div>{formatName(obj)}</div>
      {greed}
      {show?greed:'不显示'}
      {show && greed}
      <ul>
        {arr.map(item => <li key={item}>{item}</li>)}
      </ul>
  
    </div>
  );
}

export default App;
// !jsx
// 基本使用 ，表达式用{}包裹
// 函数的使用
// jsx对象
// 条件语句
// 数组
// 属性