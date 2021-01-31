import React, {Component} from 'react'
import Game from './tictactoe'
import Header from './js/Header'
import Footer from './js/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Header />
          <Game />

        </div>
        <Footer />
      </div>
    )
  }
};

export default App