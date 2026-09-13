
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import TechSection from './components/TechSection/TechSection'
import type { ITech } from './Type'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

const technologyPromise = async():Promise<ITech[]>=>{
   const res = await fetch('./data.json')
   const data = await res.json();
  return data;
}

function App() {
  const technologes = technologyPromise();
  return (
    <>
    <ToastContainer />
    <Nav></Nav>
    <Hero></Hero>
    <Suspense fallback={<h1>Loading.....</h1>}>
       <TechSection technologes={technologes}></TechSection>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
