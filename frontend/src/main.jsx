import React from 'react'
import ReactDOM from 'react-dom/client'
import Menubar from './menubar.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menubar />
    <App />
  </React.StrictMode>,
)
