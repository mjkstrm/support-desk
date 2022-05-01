import React from 'react'
import { FaTimes } from 'react-icons/fa'

function OrganizationItem( {item} ) {
  return (
    <tr className='hover transition delay-80 hover:cursor-pointer hover:bg-[#36D399] ease-in-out hover:text-black h-10 border-b border-slate-600' onClick={() => alert('Fist')}>
        <th className="text-left pl-5">{item.name}</th>
        <th><FaTimes color='red'></FaTimes></th>
    </tr>
  )
}

export default OrganizationItem