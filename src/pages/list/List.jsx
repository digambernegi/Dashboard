import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'           
import Datatable from '../../components/datatable/Datatable'
import './liststyle.css'

function List() {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listcontainer">
      <Navbar/>
      <Datatable/>
      </div>
    </div>
  )
}

export default List