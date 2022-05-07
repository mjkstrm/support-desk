
import { useSelector } from 'react-redux'
import Login from '../pages/Login'
import { FaPlus } from 'react-icons/fa'
// Components
import TaskForm from '../components/task/TaskForm';

function Home() {
  // Initialize hooks
  const { user } = useSelector(state => state.auth);
  return (
    <>
        {user ? (
          <>
            <div className="container mx-auto shadow-md">
                <div className="shadow-md py-2 h-full">
                    <label htmlFor='task-form' className='btn btn-sm modal-button border-transparent hover:bg-transparent hover:text-white btn-outline gap-2' color="green">
                      <FaPlus color="green"></FaPlus>
                      New task
                    </label>
                    <input type='checkbox' id='task-form' className='modal-toggle'></input>
                    <TaskForm></TaskForm>
                </div>
            </div>
          </>
        ) : (
          <>
            <Login></Login>
          </>
        )}
    </>
  )
}

export default Home