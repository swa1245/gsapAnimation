import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = () => {
  return (
    <div className='flex w-full items-center justify-between px-10 py-6'>
      <Logo/>
      <Menu/>
    </div>
  )
}

export default NavBar
