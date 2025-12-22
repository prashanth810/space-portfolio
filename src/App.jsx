import React from 'react'
import Navbar from './componsnts/Navbar'
import Hero from './componsnts/hero/Hero'
import About from './componsnts/about/About'
import Projects from './pages/projects/Projects'

const App = () => {
  return (
    <section className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </section>
  )
}

export default App
