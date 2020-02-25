import React ,{ Component } from 'react'
export default class SetStatePage extends Component {
  constructor(props){
      super(props);
      this.state = {
        counter:0
      }
  }
  componentDidMount() {
    document.getElementById('test').addEventListener('click',this.setCounter)
  }
  changeValue = (v) => {
    //setState在合成事件和生命周期中是异步的
    //第一个参数是object的话，多次调用会被后面的覆盖
    // this.setState({
    //     counter: this.state.counter + v
    //   },
      //callback，就是在state更新完成之后在执行
      // () => {
      //   console.log(this.state.counter)
      // }
    // )


    //第二参数是函数,多次调用会形成链式调用，全部执行
    this.setState((state) => {
      return {
        counter: state.counter + v
      }
    })
    
  }
  setCounter = () => {
    //在setTimeout同事同步的
    // setTimeout(() => {
    //   this.changeValue(1)
    // },0)
    this.changeValue(1)
    this.changeValue(2)
    
  }
  render() {
    return (
      <div>
        <div>setSetPage</div>
        <button onClick={this.setCounter}>{this.state.counter}</button>
    <button id="test">原生事件*{this.state.counter}</button>
      </div>
    )
  }
}