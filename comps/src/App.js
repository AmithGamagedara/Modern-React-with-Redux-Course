import React from 'react'
import Button from './Button'

function App() {
  return (
    <div>App
      <div>
        <Button success rounded outline> click me! </Button>
      </div>
      <div>
        <Button dager outline> Buy now!" </Button>
      </div>
      <div>
        <Button warning> see deal </Button>
      </div>
      <div>
        <Button secondary outline> Hide Ads! </Button>
      </div>
     
    </div> 
  )
}

export default App;