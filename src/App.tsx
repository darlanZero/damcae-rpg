import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/root/rootLayout'
import Frontpage from './pages/root/Frontpage'
import FormLayout from './pages/Form/FormLayout'
import Login from './pages/Form/Login'
import Register from './pages/Form/Register'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout  />}>

            <Route index element={<Frontpage />} />
          </Route>

          <Route element={<FormLayout  />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
