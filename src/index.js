//负责逻辑控制，将数据-> vDOM
import React from './kreact';
// 渲染真实dom vdom - > dom
import ReactDOM from './kreact/ReactDOM';
import Component from './kreact/Component';
import App from './App';
import './index.css'

function FunctionComponent({name}) {
  return (
    <div className="border">
      <h2>hello,{name}</h2>
    </div>
  )
}

class ClassComponent extends Component {
  render() { 
    const {name} = this.props
    return (
      <h3>hello,{name}</h3>
      );
  }
}
 

const jsx = (
  <div className="border">
    <p>这是一个文本</p>
    <a href="http://kaikeba.com">开课吧</a>
    <button onClick={() => console.log('点击测试')}>click</button>

    <ClassComponent  name="class"/>
    <FunctionComponent name="function"/>

    <>
      <h5>123</h5>
      <h5>123</h5>
    </>

    {
      ['aaa','bbb','ccc'].map(item => {
        return (
          <p key="item">item</p>
        )
      })
    }
  </div>
)


// 渲染页面，将引入的APP页面插入到ID为root的元素中
ReactDOM.render(jsx, document.getElementById('root'));



