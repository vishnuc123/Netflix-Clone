import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { ProtectedRoute } from './context/ProtectedRoute'
import MovieDetail from './pages/DetailedPages/movieDetail'
import VideoPlayer from './components/Video/VideoPlayer'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />
          <Route path='/movies/:movieName' element={
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          }
          />
          <Route path='/watch' element={
            <ProtectedRoute>
              <VideoPlayer />
            </ProtectedRoute>
          }
          />
          
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
