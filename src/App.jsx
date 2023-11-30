import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import RootLayout from "./Layouts/RootLayout"

import About from "./Pages/About"
import Contact from "./Pages/Contact"
import CustomerDashboard from "./Pages/CustomerDashboard"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import AdminLayout from "./Layouts/AdminLayout"
import DashboardAdmin from "./Pages/Admin/Dashboard"

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
      path: 'login',
      element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'customer',
    element: <CustomerDashboard />,
  },
  {
    path:'admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardAdmin />,
      },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
