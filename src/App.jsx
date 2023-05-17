import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./styles/GlobalStyles"
import Layout from "./components/Layout/Layout"
import { Provider } from "react-redux"
import { store } from "./redux/store/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
        <GlobalStyles />
      </Provider>
    </>
  )
}

export default App
