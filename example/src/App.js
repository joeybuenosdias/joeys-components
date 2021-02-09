import React from 'react'
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
// import 'joey/dist/index.css'
import Buttons from './Buttons/Buttons'
import Section from './Section/Section'
import Accordions from './Accordions/Accordions'

export default function App() {
  return (
    <div className="container">
      <SideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/section" component={Section} />
        <Route path="/accordions" component={Accordions} />
      </Switch>
    </div>
  )
}

function Home() {
  return (
    <div>
      I will be the home page
    </div>
  )
}

function SideBar() {
  const navLinks = [
    {
      name: 'buttons',
      path: '/buttons'
    },
    {
      name: 'section',
      path: '/section'
    },
    {
      name: 'accordions',
      path: '/accordions'
    },
  ]
  return (
    <nav>
      {navLinks.map((nav) => {
        return (
          <div key={nav.name}>
            <NavLink to={nav.path}>
              {nav.name}
            </NavLink>
          </div>
        );
      })}
    </nav>
  )
}
