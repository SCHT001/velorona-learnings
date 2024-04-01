import { useState } from 'react'
// import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Sidebar from './components/sidebar.jsx'
import Body from './components/body.jsx'

function App() {

  return (
    <>
     <Header/>
     <div className='flex justify-between'>

     <Sidebar></Sidebar>
     <Body text='Hello from props'></Body>
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
