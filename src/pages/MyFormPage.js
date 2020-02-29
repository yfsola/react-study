import React, { Component } from 'react'
import KFormCreate from '../components/KFormCreate'

const nameRules = {required: true,message: 'please input username'}
const passwordRules = {required: true,message: 'please input password'}

@KFormCreate
export default class MyFormPage extends Component {
  submit = () => {
    const {getFieldDecorator,getFieldsValue,getFieldValue,validateFields} = this.props
    console.log(getFieldsValue())
    validateFields((err,values) => {
      if(err) {
        console.log('err',err)
      } else {
        console.log('submit',values)
      }
    })
  }
  render() {
    const {getFieldDecorator} = this.props
    return (
      <div>
        <h3>MyFormPage</h3>
        
        {/* <p> */}
          {getFieldDecorator('name',{rules:[nameRules]})(
          <input placeholder="username"/>
          )}
          
        {/* </p> */}
        {/* <p> */}
          {getFieldDecorator('password', {rules: [passwordRules]})(
            <input type="password" placeholder="password"/>
          )}
        {/* </p> */}
        <button onClick={this.submit}>submit</button>
        
      </div>
    )
  }
}
