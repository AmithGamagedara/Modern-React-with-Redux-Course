import React from 'react'
import Button from './Button'

function App() {
  return (
    <div>App
      <div>
        <Button success rounded outline> Click me! </Button>
      </div>
      <div>
        <Button danger outline> Buy now! </Button>
      </div>
      <div>
        <Button warning> See deal </Button>
      </div>
      <div>
        <Button secondary outline> Hide Ads! </Button>
      </div>
      <div>
        <Button primary rounded> Something! </Button>
      </div>
     
    </div> 
  )
}

export default App;