import React, { Component } from 'react'
// HOC：是一个函数，传入一个组件，返回一个新组件

const foo = Comp => props => {
  return (
    <div className="border">
      <Comp {...props}/>
    </div>
  )
}
//装饰器
@foo
@foo
class Child extends Component {
  render() { 
    return (  
      <div>
        <h3>Child</h3>
      </div>
    );
  }
}

//链式调用
// const Foo =foo(foo(Child))
 
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h1>HocPage</h1>
        {/* <Foo /> */}
        <Child/>
      </div>
    )
  }
}
