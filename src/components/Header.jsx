import React from 'react'
import logo from '../img/logo.svg'
import menu from '../img/menu.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (   
       <header className="bg-[#014E56] text-white py-10 sm:py-16 md:py-[73px]">
        <div className="w-full max-w-base mx-auto px-5 flex items-center justify-between">
            <div className="flex items-center">
                <Link className="sm:mr-12 md:mr-20" to="/">
                    <img src={logo} alt="Myteam logo"/>
                </Link>

                <nav>
                <ul className="hidden sm:flex items-center space-x-10">
                    <li>
                        <NavLink className="text-lg font-semibold font" to="/" >home</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-lg font-semibold" to="/about">about</NavLink>
                    </li>
                </ul>
                </nav>
            </div>

            <div>
                <Link className="hidden py-2 px-8 rounded-[24px] border-2 border-white text-lg font-semibold sm:inline-block" to="/contact">contact us</Link>
                <button className="sm:hidden">
                    <img src={menu} alt="Hamburger menu"/>
                </button>
            </div>
        </div>
        </header>

  )
}

export default Header
