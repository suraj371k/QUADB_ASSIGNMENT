import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import Tasks from './pages/Tasks'
const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App