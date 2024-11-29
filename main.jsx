import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './E-commers/App'
import'bootstrap/dist/css/bootstrap.min.css'
import DataProvider from './E-commers/context'
createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>,
)
