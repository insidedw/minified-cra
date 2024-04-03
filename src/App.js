import React from 'react'
import './index.css'
import Icon from './assets/react.svg'

export function App() {
  return (
    <div>
      <h1>
        Hello World <span className={'time'}>{new Date().toString()}</span>
      </h1>
      <Icon />
    </div>
  )
}
