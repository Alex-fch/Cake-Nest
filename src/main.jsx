import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AdminProvider, FakeMenuProvider } from './utils/context/Context.jsx'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <AdminProvider>
          <FakeMenuProvider>
            <App/>
          </FakeMenuProvider>
        </AdminProvider>
      </BrowserRouter>
    </React.StrictMode>,
  )

