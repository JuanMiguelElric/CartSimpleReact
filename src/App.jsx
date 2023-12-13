import { Provider } from "react-redux"
import MenuPage from "./Component/loja/menu"
import store from "./Component/loja/reducers"






function App() {

  return (
    <>
      <Provider store={store}>
        <div>

          <MenuPage />
          
      

        </div>

      </Provider>
      
    </>
  )
}

export default App
