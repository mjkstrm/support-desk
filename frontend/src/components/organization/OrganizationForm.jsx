import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// Slice
import { insertOrganization } from '../../features/org/OrgSlice';
import { toast } from "react-toastify";

function OrganizationForm() {
    // Form data for new organization
    const [newOrganizationData, setNewOrganizationData] = useState({
        name: '',
        description: ''
    });
    // Initialize dispatch
    const dispatch = useDispatch();
    const { name, description } = newOrganizationData;
    // When inputs change
    const onChange = (e) => {
        setNewOrganizationData((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }));
    }
    // On organization submit
    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            toast.error('Organization name required');
        }
        else {
            const orgData = { name, description };
            dispatch(insertOrganization(orgData));
        }
    }
  return (
    <div className="flex py-5">
            <form onSubmit={onSubmit}>
                <div className="flex-1">
                    <div className="dropdown">
                        <h1 className="text-2xl m-1 text-white">Create new organization</h1>
                        <input
                            id='name'
                            name='name'
                            value={name}
                            type='text' 
                            onChange={onChange}
                            placeholder="Organization name..."
                            className="focus:bg-white text-black w-full py-1 px-2 ml-1 mt-2 rounded">

                        </input>
                        <textarea
                            id='description'
                            name='description'
                            value={description}
                            type='text'
                            onChange={onChange}
                            placeholder="Description..."
                            className="focus:bg-white text-black w-full py-1 px-2 ml-1 mt-2 rounded h-24">
                        </textarea>
                        <button type='submit' className="btn btn-outline btn-block btn-success ml-1">Save</button>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default OrganizationForm