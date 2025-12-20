import React from 'react'
import Navbar from './componsnts/Navbar'
import Hero from './componsnts/hero/Hero'
import About from './componsnts/about/About'

const App = () => {
  return (
    <section className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      {/* <section className='min-h-screen' />
      <section className='min-h-screen' />
      <section className='min-h-screen' /> */}
    </section>
  )
}

export default App
