import { Helmet } from 'react-helmet'
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Project from './components/Project'
import Service from './components/Service'
import Skills from './components/Skills'


function App() {


  return (
    <div className='relative z-0 w-full min-h-screen bg-black'>
      
      <div className='container relative z-0 w-full h-full mx-auto'>
      <Menu/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Service/>
      <Blog/>
      <Contact/>
      <Helmet>
        <title>Md ashraful Alam</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2254/2254655.png" />
      </Helmet>
      </div>
    </div>
  )
}

export default App
