import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import './index.css';
import Home from './Home/Home'
import Buttons from './Buttons/Buttons'
import Section from './Section/Section'
import Accordions from './Accordions/Accordions'
import Paginations from './Paginations/Paginations'

export default function App() {
  return (
    <div className="container">
      <SideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/section" component={Section} />
        <Route path="/accordions" component={Accordions} />
        <Route path="/paginations" component={Paginations} />
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
    {
      name: 'paginations',
      path: '/paginations'
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
