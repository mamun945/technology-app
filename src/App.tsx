
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import TechSection from './components/TechSection/TechSection'

const technologyPromise = async()=>{
   const res = await fetch('./data.json')
   const data = await res.json();
  return data;
}

function App() {
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <TechSection></TechSection>
    </>
  )
}

export default App
