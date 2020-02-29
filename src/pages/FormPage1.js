import React, { Component } from 'react'
import { Form,Input,Button } from 'antd';

const nameRules = {required: true,message: 'please input username'}
const passwordRules = {required: true,message: 'please input password'}
@Form.create()
class FormPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  submit = () => {
    const {getFieldDecorator,getFieldsValue,getFieldValue,validateFields} = this.props.form
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
    console.log(this.props)
    const {getFieldDecorator} = this.props.form
    return (
      <Form>
              <Form.Item label="username">
                {getFieldDecorator('name',{rules: [nameRules]})(<Input placeholder="please input username"/>)}
              </Form.Item>
              <Form.Item label="pasword">
                {getFieldDecorator('password',{rules:[passwordRules]})(
                  <Input type="password" placeholder="please input password"/>
                )}
              </Form.Item>
              <Form.Item>
                  <Button type="primary" size="large" onClick={this.submit}>Submit</Button>
              </Form.Item>
          </Form>
    );
  }
}

export default FormPage1;