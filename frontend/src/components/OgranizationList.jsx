import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// Org slice
import { getUserOrganizations } from '../features/org/OrgSlice'
// Components
import OrganizationItem from './OrganizationItem';

function OgranizationList() {
    // Initialize hooks
    const dispatch = useDispatch();
    const { organizations } = useSelector(state => state.org);
    // Use effect
    useEffect(() => {
        dispatch(getUserOrganizations());
    }, [dispatch])
  return (
    <div className='overflow-x auto rounded w-96'>
        <table className='w-full bg-white rounded text-black'>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                {organizations.map((item) => (
                    <OrganizationItem key={item._id} item={item}></OrganizationItem>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default OgranizationList