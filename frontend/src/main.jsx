import React from 'react'
import ReactDOM from 'react-dom/client'
import Menubar from './components/menubar.jsx'
import App from './components/App.jsx'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menubar />
    <App />
  </React.StrictMode>,
)
