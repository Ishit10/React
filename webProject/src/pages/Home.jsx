import React from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router-dom'

function home() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default home