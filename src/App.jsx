import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
export default function App(){
  const routes = createBrowserRouter([
    {path: "/", children:[
      {path: "signup", element: <Signup />},
      {path: "login", element: <Login />}
    ]}
  ])
  return(
    <RouterProvider router={routes} />
  )
}
