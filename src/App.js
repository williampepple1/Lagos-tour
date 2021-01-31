import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/Tour/Tourlist/index'

export class App extends Component {
  render() {
    return(
      <main>
      <Navbar />
      <TourList />
      </main>
      
    )
  }
}

export default App
