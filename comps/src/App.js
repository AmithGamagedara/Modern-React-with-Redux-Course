import DropDown from './components/DropDown'
import AccordionPage from './pages/AccordionPage'

function App() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ]
  
  return (
    <div>
      app
      <AccordionPage/>
      <DropDown options={options}/>
    </div>
  )
}

export default App