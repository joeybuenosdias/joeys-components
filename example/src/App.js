import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import './index.css';
import Home from './Home/Home'
import Buttons from './Buttons/Buttons'
import Section from './Section/Section'
import Accordions from './Accordions/Accordions'

export default function App() {
  return (
    <div className="container">
      <SideBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/section" component={Section} />
        <Route path="/accordions" component={Accordions} />
      </Switch>
    </div>
  )
}

function SideBar() {
  const navLinks = [
    {
      name: 'home',
      path: '/'
    },
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
            <NavLink key={nav.name} to={nav.path}>
              {nav.name}
            </NavLink>
        );
      })}
    </nav>
  )
}
