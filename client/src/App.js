import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddBooks from "./components/AddBooks"
import Home from "./components/Home"
import { Login } from "./components/Login"
import Navbar from "./components/Navbar"
import { Signup } from "./components/Signup"
import { AuthProvider} from "./context/AuthProvider"
import {useAuth} from './context/AuthProvider'
import { RequireAuth } from "./context/RequireAuth"
import {NoMatch} from "./components/NoMatch"
import { useState, useEffect } from "react"

function App() {
  const authLocal = useAuth()
  const [loader, setLoader] = useState(false);


  if (loader)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING...</h1>
      </div>
    );

  return (
    <>

      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
      
            <Route path='/' element={
              <RequireAuth>
                <Home />
                </RequireAuth>
            } />
            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addbooks' element={ <RequireAuth><AddBooks /></RequireAuth>} />
            <Route path='*' element={ <NoMatch /> } />

          </Routes>

        </BrowserRouter>
      </AuthProvider>



    </>



  )
}

export default App
