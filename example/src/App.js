import React from 'react'
import 'joey/dist/index.css'
import Buttons from './Buttons/Buttons'
import Section from './Section/Section'

const App = () => {
  return (
    <div className="container">
      <div>
        <Buttons />
        <Section />
      </div>
    </div>
  )
}

export default App
