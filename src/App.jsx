import Chats from "./pages/Chats";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
export default function App(){
  const routes = createBrowserRouter([
    {path: "/", element: <Chats />}
  ])
  return(
    <RouterProvider router={routes} />
  )
}
