import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/root/rootLayout'
import Frontpage from './pages/root/Frontpage'
import FormLayout from './pages/Form/FormLayout'
import Login from './pages/Form/Login'
import Register from './pages/Form/Register'
import Races from './pages/root/Races'
import Classes from './pages/root/Classes'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout  />}>
            <Route index element={<Frontpage />} />
            <Route path='races' element={<Races />} />
            <Route path='classes' element={<Classes />}/>
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
