import React from 'react';
import ReactDOM from 'react-dom';

//App组件 大写字母开头的都是组件（规范）
// import App from './App';
// import Welcome from './Welcome';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';  //引入css文件


// ReactDOM 挂载在root节点上,将App组件渲染到root标签里边去
// < App / >  jsx语法
ReactDOM.render( < TodoList / > , document.getElementById('root'));

