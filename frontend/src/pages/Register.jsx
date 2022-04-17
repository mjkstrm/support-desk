import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
// Use selector lets us select objects from global state
// Use dispatch which lets us dispatch any actions
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, reset } from '../features/auth/AuthSlice'

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const { email, password, passwordConfirm} = formData;
    // Initialize hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Get state of 'auth' object.
    const {user, isLoading, isSuccess, message, hasError} = useSelector(state => state.auth)
    // use effect
    useEffect(() => {
        if (hasError) {
            toast.error(message);
        }
        // Redirect if register was successful
        if (isSuccess && user) {
            navigate('/');
        }
        dispatch(reset());
    }, [hasError, isSuccess, user, message, navigate, dispatch]);
    // Called when inputs are changed
    const onChange = (e) => {
        setFormData((previousState) => ({
            // Save previous state, only update changed value.
            ...previousState,
            [e.target.name]: e.target.value
        }));
        
    };
    const onSubmit = (e) => {
        e.preventDefault();
        // Raise error if passwords does not match.
        if (password !== passwordConfirm) {
            toast.error('Passwords do not match.');
        }
        else {
            const userData = {
                email,
                password
            }
            dispatch(registerUser(userData));
        }
    }
  return (
    <>
        <form onSubmit={onSubmit} className="w-full max-w-xs max-h-xs text-cyan-50 bg-cyan-800 shadow-xl rounded max-w-lg mx-auto pt-5 mt-20">
            <div className="shadow-md mb-4">
                <FaUser className="text-3xl mx-auto"></FaUser>
                <h2 className="text-3xl mx-auto text-center mb-2">Register</h2>
            </div>
            <div className="flex flex-wrap pt-5">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <input 
                        id='email' 
                        name='email'
                        value={email} 
                        type='email'
                        onChange={onChange} placeholder='Enter email...'
                        required
                        className="focus:bg-white text-black shadow-md w-full py-2 px-4 leading-tight rounded bg-gray-200">
                    </input>
                </div>
            </div>
            <div className="flex flex-wrap pt-5">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <input 
                        id='password' 
                        name='password'
                        value={password} 
                        type='password' 
                        onChange={onChange} placeholder='Enter password...'
                        required
                        className="focus:bg-white text-black shadow-md w-full py-2 px-4 leading-tight rounded bg-gray-200">
                    </input>
                </div>
            </div>
            <div className="flex flex-wrap pt-5">
                <div className="w-full px-3 mb-6 md:mb-0">    
                    <input 
                        id='passwordConfirm' 
                        name='passwordConfirm'
                        value={passwordConfirm} 
                        type='password' 
                        onChange={onChange} placeholder='Confirm password...'
                        required
                        className="focus:bg-white text-black shadow-md w-full py-2 px-4 leading-tight rounded bg-gray-200">
                    </input>
                </div>
            </div>
            <div className="flex px-3 pt-5 pb-5">
                <button className="btn btn-outline btn-block btn-success">Register</button>
            </div>
        </form>
    </>
  )
}

export default Register