
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import TechSection from './components/TechSection/TechSection'
import type { ITech } from './Type'

const technologyPromise = async():Promise<ITech[]>=>{
   const res = await fetch('./data.json')
   const data = await res.json();
  return data;
}

function App() {
  const technologes = technologyPromise();
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <Suspense fallback={<h1>Loading.....</h1>}>
       <TechSection technologes={technologes}></TechSection>
    </Suspense>
    </>
  )
}

export default App
