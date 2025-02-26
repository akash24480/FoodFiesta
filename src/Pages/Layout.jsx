import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className="flex-grow"> {children} </main> 
        <Footer />
    </div>
  )
}

export default Layout