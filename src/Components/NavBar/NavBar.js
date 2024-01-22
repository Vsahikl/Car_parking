import React from 'react'
import Button from './Button'

function NavBar() {
    let Links=[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Services",link:"/"},
        {name:"Contact",link:"/"}
    ]
  return (
    <div className='shadow-md w-full fixed top-0 left-0 h-100'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                <ion-icon name="car"></ion-icon>
                
                </span>
                Smart Car Pro
                
            </div>
            <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto'>
                {
                    Links.map((link,index)=>(
                        <li key={index} className='md:ml-8  text-xl md:my-0 my-7'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name} </a>
                        </li>
                    ))
                }
                <Button>Sign up</Button>
                <Button>Login in</Button>

            </ul>
            
        
        </div>
      
    </div>
  )
}

export default NavBar
