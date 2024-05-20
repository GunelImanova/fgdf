import { useState } from 'react'
import './App.css'
import Navbar from "../src/components/Navbar/index";
import Header from "../src/components/Header/index";
import CardSection from './components/CardSection/index';
import Section2 from './components/Section2/index';
function App() {
  const [count, setCount] = useState(0)
return (
 
    <>
    <Navbar/>
    <Header/>
    <CardSection/>
    <Section2/>
    </>
  )
}

export default App
