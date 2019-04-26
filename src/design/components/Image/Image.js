import React, { Component } from 'react'

import './../style.scss'

class Image extends Component {
    render() {
        return (
            <div className="fullScreen imageRapper">
                <div className="imageBackground">
                  <img alt="hogehoge" src={this.props.image}/> 
                </div>
                <footer><h1>わかったら<br />画面をタップ！</h1></footer>
            </div>
        )
    }
}

export default Image
