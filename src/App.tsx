import { useState } from 'react'
import './App.css'
import Message from './Message'
import Navbar from './component/Navbar'
import Main from './component/Main'
import Content from './component/Content'
import Footer from './component/Footer'

function App() {

  const [darkMode, setDarMode]=  useState(false);

  function toggleDarkMode() {
      setDarMode( prevState => !prevState)
  }
  return (
  <div className='app-div'>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Content darkMode={darkMode}/>
    <Footer/>
  </div>)
}

export default App
