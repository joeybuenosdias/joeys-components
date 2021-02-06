import React from 'react'
import 'joey/dist/index.css'
import Buttons from './Buttons/Buttons'
import Section from './Section/Section'
import Accordions from './Accordions/Accordions'

const App = () => {
  return (
    <div className="container">
      <div>
        <Buttons />
        <Section />
        <Accordions />
      </div>
    </div>
  )
}

export default App
