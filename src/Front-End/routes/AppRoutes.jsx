import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import VoteProvider from '../Dashboard/chart/Context/VoteProvider'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <VoteProvider>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </VoteProvider>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
