import React, { Component } from 'react'
const Sandbox = require('sandbox')

class Eval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null,
      console: null
    }
  }
  evaluate() {
    var sandbox = new Sandbox()
    sandbox.run(this.props.value, function(output) {
      this.setState({
        results: output.results
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.evaluate()} >Run</button>
        {this.state.console.map(item => <div>{item} </div>)}
        <div>{this.state.console}</div>
        <div>{this.state.results}</div>
      </div>
    )
  }
}

export default Eval
