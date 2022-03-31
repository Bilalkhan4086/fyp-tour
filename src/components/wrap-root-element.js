import React from 'react'
import { NavBar } from './Header/Navbar'

export const wrapRootElement = ({element}) => {
  return (
    <div>
    <NavBar/>
    {element}
    </div>
  )
}
