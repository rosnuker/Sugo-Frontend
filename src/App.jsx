import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import RootLayout from "./Layouts/RootLayout"

import AdminLayout from "./Layouts/AdminLayout"
import About from "./Pages/About"
import DashboardAdmin from "./Pages/Admin/Dashboard"
import Contact from "./Pages/Contact"
import CustomerDashboard from "./Pages/CustomerDashboard"
import DeliveryDashboard from "./Pages/DeliveryDashboard"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import RegisterSuccess from "./Pages/RegisterSuccess"
import SpecificSugo from "./Pages/SpecificSugo"
import SugoArrived from "./Pages/SugoArrived"

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
  {
    path: 'specificsugo',
    element: <SpecificSugo />,
  },
  {
    path: 'registersuccess',
    element: <RegisterSuccess />,
  },
  {
    path: 'deliverydashboard',
    element: <DeliveryDashboard />,
  },
  {
    path: 'sugoarrived',
    element: <SugoArrived />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
