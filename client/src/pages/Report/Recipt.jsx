import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
import Investigation from './Investigation'
export default function Recipt() {
  return (
    <div>
      <Navbar/>
      <Table className='m-2'/>
      <Investigation/>
    </div>
  )
}
