import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className='flex flex-col h-screen bg-cyan-900'>
          <Navbar></Navbar>
          <main className='container mx-auto'>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='/settings' element={<Settings></Settings>}></Route>
            </Routes>
          </main>
        </div>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
