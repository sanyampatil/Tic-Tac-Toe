import { useState } from 'react'
import Card from './Components/Card/Card'
import Grid from './Components/Grid/Grid'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Grid numberOfCards={9}/>

    </>
  )
}

export default App
