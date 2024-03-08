//创建外壳组件
import React from "react";
import Hello from "./components/hello";
const {Component}=React
export default  class App extends Component{
      render(){
        return(
          <div>
           <Hello/>
          </div>
        )
      }
}

//暴露App到页面
