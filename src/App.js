import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Line from './components/line/Line';
import './App.css'


const App = () => {
  return (
    <>
         <main className="main">
      <Header/>
      <Home/>
      <Line/>
      <About/>
      <Line/>
      <Skills/>
      <Line/>
      <Contact/>

   </main>
         <Footer/>
         <ScrollUp/>
    </>

    

   
  )
}

export default App