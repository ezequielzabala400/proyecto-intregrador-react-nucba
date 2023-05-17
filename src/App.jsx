import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./styles/GlobalStyles"
import Layout from "./components/Layout/Layout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
