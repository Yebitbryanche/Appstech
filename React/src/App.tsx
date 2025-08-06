
import NavLinks from "./Containers/Navigation"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
         <NavLinks/>
      </BrowserRouter>
    </div>
  )
}

export default App
