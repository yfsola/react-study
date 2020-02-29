import React, { Component } from 'react'
import { Form,Input,Button } from 'antd';

export default class FormPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  submit = () => {
    console.log('submit',this.state)
  }
  render() {
    const { name, password } = this.state
    return (
      <div>
          <Form>
              <Form.Item label="username">
                  <Input placeholder="please input username" value={name} onChange={e => this.setState({
                    name: e.target.value
                  })}/>
              </Form.Item>
              <Form.Item label="pasword">
                  <Input placeholder="please input password" value={password} onChange={e => this.setState({
                    password: e.target.value
                  })}/>
              </Form.Item>
              <Form.Item>
                  <Button type="primary" size="large" onClick={this.submit}>Submit</Button>
              </Form.Item>
          </Form>
      </div>
    )
  }
}
