import { Provider } from "react-redux"
import MenuPage from "./Component/loja/menu"
import store from "./Component/loja/reducers"
import HomePage from "./Component/screens/home"



function App() {
  const localCart=JSON.parse(localStorage.getItem('loja:cart'))
  if(localCart !== null){
    store.dispatch({type: 'CHANGE_CART',localCart})
  }

  return (
    <>
      <Provider store={store}>
        <div>

          <MenuPage />
          <HomePage />
          
      

        </div>

      </Provider>
      
    </>
  )
}

export default App
