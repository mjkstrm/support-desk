import { Link, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import Login from '../pages/Login'

function Home() {
  // Initialize hooks
  const { user } = useSelector(state => state.auth);
  return (
    <>
        {user ? (
          <>
          HOME
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