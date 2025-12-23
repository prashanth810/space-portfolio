import React from 'react'
import Navbar from './componsnts/Navbar'
import Hero from './componsnts/hero/Hero'
import About from './componsnts/about/About'
import Projects from './pages/projects/Projects'
import Experience from './pages/experience/Experience'
import Testimonial from './componsnts/testimonial/Testimonial'
import { Testimonials } from './componsnts/constants/Myskills'
import Contact from './componsnts/contact/Contact'

const App = () => {
  return (
    <section className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonial testimonials={Testimonials} />
      <Contact />
    </section>
  )
}

export default App
