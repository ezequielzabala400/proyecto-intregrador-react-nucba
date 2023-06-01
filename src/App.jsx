import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./styles/GlobalStyles"
import Layout from "./components/Layout/Layout"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store/store"
import { PersistGate } from "redux-persist/integration/react"

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
