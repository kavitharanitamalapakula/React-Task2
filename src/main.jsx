import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Table } from './App.jsx'
import { Cards } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Table />
    <Cards />
  </StrictMode>,
)
