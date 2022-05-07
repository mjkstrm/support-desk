import React from 'react'
import { useState, useEffect } from "react"

function TaskForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        state: '',
        type: ''
    });
    const { name, description, state, type } = formData;
  return (
    <div className='modal modal-top h-screen'>
        <div className='modal-box w-11/12 max-w-5xl h-3/5'>
            <form className='shadow-md rounded w-full h-full'>
                <div className='w-full h-full'>
                    <h1 className='text-lg pl-3 text-bold text-white'>Title</h1>
                    <div className='w-full px-3 mb-6 md:mb-0'>
                        <input
                            id='name'
                            name='name'
                            value={name}
                            type='text'
                            required
                            className='focus:bg-white w-full text-black shadow-md py-2 px-4 leading-tight rounded bg-gray-200'>
                        
                            </input> 
                        
                    </div>
                    <div className='flex flex-wrap w-full mx-3 mt-2'>
                        <select className='select select-sm text-black select-bordered w-full max-w-xs bg-gray-200 focus:bg-white'>
                            <option>Feature</option>
                            <option>Bug</option>
                        </select>
                        <select className='select select-sm text-black select-bordered w-full max-w-xs bg-gray-200 focus:bg-white ml-2'>
                            <option>Created</option>
                            <option>In Progress</option>
                            <option>Finished</option>
                        </select>
                    </div>
                    <div className='w-full h-full px-3 mb-6'>
                        <textarea
                            id='description'
                            name='description'
                            value={description}
                            type='text'
                            className='focus:bg-white h-full w-full text-black shadow-md py-2 mt-5 px-4 leading-tight rounded bg-gray-200'>
                        </textarea>   
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default TaskForm