//负责逻辑控制，将数据-> vDOM
import React from 'react';
// 渲染真实dom vdom - > dom
import ReactDOM from 'react-dom';
// import './index.css';
import style from './index.module.css'
import logo from './logo.svg'
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
const jsx = (
  <div className={style.app}>

    
    <div>hello ,{name}</div>
    <div>{formatName(obj)}</div>
    {greed}
    {show?greed:'不显示'}
    {show && greed}
    <ul>
      {arr.map(item => <li key={item}>{item}</li>)}
    </ul>


    <img src={logo} className={style.logo}/>


  </div>
);

// 渲染页面，将引入的APP页面插入到ID为root的元素中
ReactDOM.render(jsx, document.getElementById('root'));

// 基本使用 ，表达式用{}包裹
// 函数的使用
// jsx对象
// 条件语句
// 数组
// 属性

