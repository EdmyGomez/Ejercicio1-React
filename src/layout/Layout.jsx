import Footer from 'Components/Footer'
import Header from 'Components/Header'
import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='mainContainer'>
        <Header/>
        <main>
            {children}
        </main>
         <Footer/>
        </div>
 )
}

export default Layout

