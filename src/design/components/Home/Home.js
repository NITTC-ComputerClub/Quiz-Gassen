import React, { Component } from 'react'

import './../style.scss'

class Home extends Component {
  constructor(props){
      super(props)
  }

    render() {
        return (
            <div className="fullScreen">
                <div className="loginForm">
                    <h1>Title</h1>
                    {this.props.user
                      ? <button onClick={this.props.logout} className="primaryButton">Google Logout</button>
                      : <button onClick={this.props.login} className="primaryButton">Google Login</button>
                    }
                    {
                      //<button className="primaryButton">ログイン</button>
                    }
                </div>
            </div>
        )
    }
}

export default Home
