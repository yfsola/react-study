//负责逻辑控制，将数据-> vDOM
import React from 'react';
// 渲染真实dom vdom - > dom
import ReactDOM from 'react-dom';
import App  from './App'
import { Provider } from 'react-redux'


// 渲染页面，将引入的APP页面插入到ID为root的元素中
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// 基本使用 ，表达式用{}包裹
// 函数的使用
// jsx对象
// 条件语句
// 数组
// 属性

