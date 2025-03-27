import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Skill from "./components/Skill/Skill.jsx";
import Projects from "./components/Projects/Projects.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route path="" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="skill" element={ <Skill /> } />
      <Route path="projects" element={ <Projects /> } />
      <Route path="contact" element={ <Contact /> } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
