//引入react核心库
import React from "react";
//引入ReactDOM
import { createRoot } from "react-dom/client"
//引入App组件
import App from "./App";
//渲染App到页面
// ReactDOM.render(<App/>,document.getElementById('root'))

const root = createRoot(document.getElementById('root'));
root.render(<App/>)