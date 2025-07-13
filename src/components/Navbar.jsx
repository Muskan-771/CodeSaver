import React from 'react'
import { NavLink } from 'react-router-dom'
// import './src/output.css';
// import './src/output'


const Navbar = () => {
    return (
        // <div className='flex flex-row gap-4 place-content-evenly '>
        //     <NavLink 
        //     to={"/"}
        //     >
        //         Home
        //     </NavLink>

        //     <NavLink 
            
        //     to={"/pastes"}
        //     >
        //         Pastes
        //     </NavLink>
        // </div>
        <div className="w-full bg-[#f8fafc] border-b border-gray-200 py-4 shadow-sm">
  <div className="max-w-6xl mx-auto flex justify-center gap-8 text-[17px] font-medium">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `relative text-gray-700 hover:text-teal-600 transition duration-200
         after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 
         hover:after:w-full after:bg-teal-500 after:transition-all after:duration-300
         ${isActive ? 'text-teal-600 after:w-full' : ''}`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/pastes"
      className={({ isActive }) =>
        `relative text-gray-700 hover:text-teal-600 transition duration-200
         after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 
         hover:after:w-full after:bg-teal-500 after:transition-all after:duration-300
         ${isActive ? 'text-teal-600 after:w-full' : ''}`
      }
    >
      Pastes
    </NavLink>
  </div>
</div>



//   
    )
}

export default Navbar
