
import { NavLink } from 'react-router-dom'
import {useAuth} from '../context/AuthProvider'

function Navbar() {

  const authLocal = useAuth()


    return (

      <>


<nav className="navbar navbar-expand-lg bg-light py-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Library Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
        <li className="nav-item">
        <NavLink className="nav-link" to='/' >
                  Home
                </NavLink>
        </li>

       {!authLocal.user &&( <>
        <li className="nav-item">
        <NavLink className="nav-link" to='/login' >
                    Login
                  </NavLink>
        </li>
        <li className="nav-item">
          
        <NavLink className="nav-link" to='/signup' >
                    Signup
                  </NavLink>
        </li> 
        </> ) }
        

        {authLocal.user &&( <>
        <li className="nav-item">
          
       <button onClick={()=>{authLocal.logout()} }>Logout</button>
                   
                  
        </li>
        </> ) }
      
        
      </ul>
    </div>
  </div>
</nav>
      






       {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" to='/' >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to='/profile' >
                  Profile
                </NavLink>
              </li>
              <li class="nav-item">
              
                  <NavLink className="nav-link" to='/login' >
                    Login
                  </NavLink>
                
              </li>
              <li>
               
                  <NavLink className="nav-link" to='/signup' >
                    Signup
                  </NavLink>
              
              </li>
              <li>
               
               <NavLink className="nav-link" to='/addbooks' >
                AddBooks
               </NavLink>
           
           </li>
            </ul>
          </div>
        </div>
      </nav>  */}
  
      </>
    )
  }
  
  export default Navbar
  