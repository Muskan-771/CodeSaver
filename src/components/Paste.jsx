import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes)
    console.log(pastes)
    const [searchTerm , setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));



  return (
    <div>
      <input 
        className='p-2 rounded-2xl min-w-[500px] mt-5'
        type='search'
        placeholder=' search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-5' >

      </div>

    </div>
  )
}

export default Paste
