import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/login/Login'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
