import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/Auth.tsx'
import { WatchListProvider } from './context/Watchlist.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <WatchListProvider>
       <App /> 
      </WatchListProvider>
       </AuthProvider>
  </StrictMode>,
)
