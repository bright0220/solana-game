import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import CircleLoader from './components/Loader/CircleLoader'

// const Home = lazy(() => import('./pages/Home'))
import Home from './pages/Home'
// const Mint = lazy(() => import('./pages/Mint'))
import Mint from './pages/Mint'

function App() {
  return (
    <>
        <Router>
          <Routes>
            {/* <Route path="/" element={ <Navigate replace to="/mint" /> } /> */}
            <Route path="/" element={ <Home /> } />
            <Route path="/mint" element={ <Mint /> } />
          </Routes>
        </Router>
    </>
  );
}

export default App;