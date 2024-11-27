import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import PrivacyPolicy from './components/Privacy';
import Home from './components/Home';
import './index.css'
import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <Home /> */}
    <RouterProvider router ={router} />

  </React.StrictMode>,
)
