import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Github, { githubInfoLoader } from './Github/github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        loader:githubInfoLoader,
        path: "github",
        element: <Github/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
