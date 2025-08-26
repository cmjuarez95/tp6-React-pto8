import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Formulario from './components/Formulario'


function App() {


  return (
    <>
    <Header></Header>
    <main className='container'>
      <Formulario></Formulario>
    </main>
     <Footer></Footer>
    </>
  )
}

export default App
