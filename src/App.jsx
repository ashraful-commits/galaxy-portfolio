import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Project from './components/Project'
import Service from './components/Service'
import Skills from './components/Skills'


function App() {


  return (
    <div className='w-full min-h-screen bg-black'>
      <div className='container w-full h-full mx-auto '>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Service/>
      <Blog/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
