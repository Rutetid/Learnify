import React from 'react'
import Sidebar from './Sidebar/Sidebar'

export default function Dashboard() {
  return (
	<div className='flex'>
	  <Sidebar />
	  <div className='flex flex-col w-5/6 h-screen bg-black'>
	    </div>
	</div>
  )
}
