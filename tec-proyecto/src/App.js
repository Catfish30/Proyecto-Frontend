import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './Routes'
// import NavTop from './components/NavTop'
// import FooterPage from './components/FooterPage'

export default function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Routes />
        </Switch>
        
      </Router>
    </div>
  )
}
