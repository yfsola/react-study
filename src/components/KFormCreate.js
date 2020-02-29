import React, {Component} from 'react'

export default function KFormCreate(Comp) {
  return class KFormCreate extends Component {
    constructor(props) {
      super(props);
      this.state = {errors:{} };
      this.options = {}
    }
    handleChange = e => {
      const {name,value} = e.target;
      // this.setState({[name]: value})
      this.validate({
        ...this.state,
        [name]:value
      })
    }
    getFieldDecorator = (filed,option) => {
      this.options[filed] = option
      return InputCmp => {
        return (
          <div>
          {React.cloneElement(InputCmp,{
          name: filed,
          value: this.state[filed] || '',
          onChange: this.handleChange
        })}
        <p className="red">{this.state.errors[filed]}</p>
        </div>
        );
      }
    }
    getFieldsValue = () => {
      return {...this.state}
    }
    getFieldValue = (filed) => {
      return this.state[filed]
    }
    validate = (state) => {
      let errors = {}
      for(let name in this.options) {
        if(state[name] === undefined || state[name] === '') {
          this.options[name].rules.forEach(val => {
            errors[name] = val.message
          })
        }
      }
      this.setState({...state,errors})
    }
    validateFields = callback => {
      let state = {...this.state}
      this.validate(state)
      const {errors} = this.state
      if(JSON.stringify(errors) === '{}') {
        callback(undefined,state)
      } else {
        callback(errors, state)
      }
    }
    render() {
      return (
        <div className="border">
          <Comp
          getFieldDecorator={this.getFieldDecorator}
          getFieldsValue = {this.getFieldsValue}
          getFieldValue = {this.getFieldValue}
          validateFields = {this.validateFields}
          />
        </div>
      );
    }
  }
}
