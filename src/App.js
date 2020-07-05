import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
// import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Portfolios from './components/pages/Portfolios'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'
import ColoredLine from './components/shared/ColoredLine'

function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <ColoredLine color="yellow" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolios" component={Portfolios} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/listing" component={Listing} />
          <PrivateRoute path="/listing">
            <Listing />
          </PrivateRoute>
        </Switch>
        {/* <Footer />   */}
    </BrowserRouter>
  )
}

export default App;
