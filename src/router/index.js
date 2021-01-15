import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import $s from './index.module.scss'
import Home from '../components/home/home';
import About from '../components/abouts/about'
import Users from '../components/users/users'

export default function App() {
  return (
    // <BrowserRouter>
    <Router>
      <div className={$s.router}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // </BrowserRouter>
  )
}

// React.render((
//   <Router>
//       <Route path="/" component={Home}></Route>
//       <Route path="/about" component={About}></Route>
//       <Route path="/users" component={Users}></Route>
//   </Router>
// ),document.body)
