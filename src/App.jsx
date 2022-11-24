import { useState } from 'react'
import reactLogo from './assets/react.svg'

import ComponentContainer from './components/ComponentContainer/ComponentContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <ComponentContainer greeting ={'Bienvenidos!'}/>
    </>
  )
}

export default App
