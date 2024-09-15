import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''element={<Home/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='user/:userid'element={<User/>}></Route>
      <Route loader={githubInfoLoader}
       path='github'
       element={<Github/>}>
       </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>,
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
