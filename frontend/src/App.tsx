import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
