import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
    return (
        <div className='font-livvic bg-004047 text-white w-full min-h-screen flex flex-col'>
            <Header/>
            <main className='grow'>
                <Outlet/>

            </main>
            <Footer />

        </div>
    )
}

export default Mainlayout
