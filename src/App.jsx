import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"

import AdminLayout from "./Layouts/AdminLayout"
import CourierLayout from "./Layouts/CourierLayout"
import RootLayout from "./Layouts/RootLayout"

import About from "./Pages/About"
import DashboardAdmin from "./Pages/Admin/Dashboard"
import Contact from "./Pages/Contact"
import CourierDashboard from "./Pages/CourierDashboard"
import CourierDrawer from "./Pages/CourierDrawer"
import CustomerDashboard from "./Pages/CustomerDashboard"
import DeliveryDashboard from "./Pages/DeliveryDashboard"
import EditProfileDeliver from "./Pages/EditProfileDeliver"
import EditProfileUser from "./Pages/EditProfileUser"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import RegisterSuccess from "./Pages/RegisterSuccess"
import SpecificSugo from "./Pages/SpecificSugo"
import SugoArrived from "./Pages/SugoArrived"
import SugoProgress from "./Pages/SugoProgress"

import { useState } from "react"

function App() { 
  const [user, setUser] = useState([]);
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
        element: <Login user={user} setUser={setUser} />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'customer',
      element: <CustomerDashboard user={user} setUser={setUser} />,
    },
    {
      path:'admin',
      element: <AdminLayout user={user} setUser={setUser} />,
      children: [
        {
          index: true,
          element: <DashboardAdmin />,
        },
      ],
    },
    {
      path:'courier',
      element: <CourierLayout user={user} setUser={setUser} />,
      children: [
        {
          index: true,
          element: <CourierDashboard />,
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
    },
    {
      path: 'editprofileuser',
      element: <EditProfileUser />,
    },
    {
      path: 'editprofiledeliver',
      element: <EditProfileDeliver />,
    },
    {
      path: 'sugoprogress',
      element: <SugoProgress />,
    },
    {
      path: 'courier1',
      element: <CourierDashboard />,
    },
    {
      path: 'courierdrawer',
      element: <CourierDrawer />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
