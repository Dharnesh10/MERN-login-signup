import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';

function PrivateRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem('token')
  return isLoggedIn ? children : <Navigate to='/login' />
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' 
              element={<PrivateRoute><Main  /></PrivateRoute>} 
            />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </div>
  );
}

export default App;