
import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import Protected from './pages/Protected'
import NotFound from './pages/NotFound'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('demo-authenticated') === 'true',
  )

  function handleLogin() {
    sessionStorage.setItem('demo-authenticated', 'true')
    setIsAuthenticated(true)
  }

  return (
    <>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />

          <Route
            path="/contact"
            element={<Contact onLogin={handleLogin} />}
          />

          <Route
            path="/private"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Protected />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>© 2026 Akmaral's Journal. Made with care.</p>
      </footer>
    </>
  )
}
