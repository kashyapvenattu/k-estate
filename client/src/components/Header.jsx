import React from 'react'
import {FaSearch} from 'react-icons/fa'

function Header() {
  return (
    
    <header className="bg-slate-200 shadow-md" >
        <div className="flex justify-between items-center p-3 mx-auto max-w-6xl" >
            <h1 className="font-bold flex flex-wrap">
                <span className="text-slate-500">K</span>
                <span className="text-slate-700">Estate</span>
            </h1>
            <form action="" className="bg-slate-100 p-3 rounded-lg flex items-center">
                <input type="text" className="bg-transparent" placeholder='Search...' />
                <FaSearch/>
            </form>
        </div>
    </header>
  )
}

export default Header