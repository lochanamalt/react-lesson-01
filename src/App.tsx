import { useState } from 'react'
import './App.css'
import Message from './Message'
import Navbar from './component/Navbar'
import Main from './component/Main'
import Content from './component/Content'
import Footer from './component/Footer'

function App() {
  return (
  <div className='app-div'>
    <Navbar/>
    <Content/>
    <Footer/>
  </div>)
}

export default App
