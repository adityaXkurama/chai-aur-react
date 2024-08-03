import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const anotherUser='chai aur code'

const createElement=React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'visit this page',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
