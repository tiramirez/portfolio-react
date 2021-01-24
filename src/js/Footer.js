import React, {Component} from 'react'
import '../css/Footer.css'

class Footer extends Component{
  render() {
    return(

      <div className='footer'>
        <div className='colorsContainer'>
          <div className='colorSquare' style={{background:"#ffffff"}}></div>
          <div className='colorSquare' style={{background:"#dfdfdf"}}></div>
          <div className='colorSquare'style={{background:"#e2c0c0"}}></div>
          <div className='colorSquare' style={{background:"#fa9696"}}></div>
          <div className='colorSquare'style={{background:"#acfabc"}}></div>
          <div className='colorSquare'style={{background:"#a2f1f2"}}></div>
          <div className='colorSquare'style={{background:"#00ffdd"}}></div>
          <div className='colorSquare'style={{background:"#9ca2fa"}}></div>
          <div className='colorSquare'style={{background:"#9656b4"}}></div>
        </div>
        <p>by Tomas Ramirez with React.js</p>
      </div>
    )
  }
}

export default Footer