import Chats from "./pages/Chats";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Watch from "./pages/Watch";
export default function App(){
  const routes = createBrowserRouter([
    {path: "/", element: <Chats />},
    {path: "/watch", element: <Watch />}
  ])
  return(
    <RouterProvider router={routes} />
  )
}
