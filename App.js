import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props)

    console.log('Props passed to compoent', props)
  }

  _handleClick() {
    alert(this.props.value)
  }

  render() {
    return (
      <html>
        <head>
          <title>Redux server rendering</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <h1>Redux server rendering</h1>
          <button onClick={this._handleClick.bind(this)}>Click me</button>
          {/* Setting state to global variable */}
          <script dangerouslySetInnerHTML={{
            __html: 'window.INIT_STATE=' + JSON.stringify(this.props.state)
          }} />
          {/* Loading client app */}
          <script src='/bundle.js' />
        </body>
      </html>
    )
  }
}

export default connect((state) => ({
  // Bit redundant, but state will be in parent (html component)
  state,
  // sub parts of state in other components
  value: state.value
}))(App)
