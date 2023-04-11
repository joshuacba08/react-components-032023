import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button/Button'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Buttons</h1>
      <p>Botones como componentes</p>
      <Button title='Action 1' />
      <Button title='Action 2'/>
      <Button title='Action 3'/>
      <Button title='Action 4' disabled={true}/>
    </>
  )
}

export default App
