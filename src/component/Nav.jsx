import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
  return (
    <div className='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/Hero'}>Hero Section</Link>

    </div>
  )
}
