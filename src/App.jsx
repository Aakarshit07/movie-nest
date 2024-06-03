import { RouterProvider } from "react-router-dom"
import { appRoutes } from "./Routes"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRoutes} />
      </Provider>
    </>
  )
}

export default App
