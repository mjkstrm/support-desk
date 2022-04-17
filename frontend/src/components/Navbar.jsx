// Icons
import { FaSignInAlt, FaSignOutAlt, FaUser, FaHandsHelping } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser, reset } from '../features/auth/AuthSlice'
function Navbar() {
    // initialize hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Get user from global state
    const { user } = useSelector(state => state.auth);
    // Log out
    const onLogout = (e) => {
        dispatch(logoutUser());
        dispatch(reset());
        navigate('/');
    }
  return (
    <nav className="navbar shadow-xl bg-cyan-900 text-primary-content">
        <div className='container'>
            <div className='flex-none justify-start px-5 border-r border-white'>
                <Link to='/' className='text-xl font-bold align-middle'>
                    Support-Desk
                </Link>
            </div>

            <div className='flex-1 px-5 mx-2'>
                {user ? (
                    <>
                        <div className='flex'>
                            <Link to='/' className='btn btn-ghost btn-sm rounder-btn'>
                                Home
                            </Link>
                            <Link to='/about' className='btn btn-ghost btn-sm rounder-btn'>
                                About
                            </Link>
                        </div>    
                    </>
                ) : (
                    <>

                    </>
                )}
                
            </div>
            <div className='flex-2 justify-end px-5 mx-2 absolute right-0'>
              <div className='flex'>
                  {user ? (
                    <button onClick={onLogout} className='btn btn-ghost btn-sm rounder-btn'>Logout</button>
                  ) : (
                  <>
                    <Link to='/login' className='btn btn-ghost btn-sm rounder-btn'>
                      Login
                    </Link>
                    <Link to='/register' className='btn btn-ghost btn-sm rounder-btn'>
                        Register
                    </Link>
                  </>
                  )}
                
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar