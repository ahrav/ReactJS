import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Article from './components/Article/Article'
import Sections from './components/Sections/Sections'

function App() {
  return (
    <div id="page-wrapper">
      {/* <Header /> */}
      {/* <Nav /> */}
      <Banner />
      <section id="wrapper">
        <Sections title="aboutMe" />
        <Article title="projects"/>
      </section>
      <Footer title="contactMe"/>
    </div>
  );
}

export default App
