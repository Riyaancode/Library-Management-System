import { useState } from 'react'
import axios from 'axios';
import {useAuth} from '../context/AuthProvider'
import { useNavigate, useLocation } from 'react-router-dom'

export const Signup = () => {

  const [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
    DOB: ""
  });


  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || '/';

  const authLocal = useAuth()


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      axios.post("/register", userdata).then(() => {
        navigate(redirectPath, { replace: true })
        alert("successfully Signup");
      })

    } catch (error) {

      alert(error.message)
    };

  }




  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuserdata({ ...userdata, [name]: value })
  }




  return (
    <>

      <div className='container w-50'>
        <h1>Signup</h1>
        <div>
          <div className="mb-3" />
          <label htmlFor='username' className="form-label">Username</label>
          <input type='text' className='form-control' id='username' value={userdata.username} name='username' onChange={handleInputs} />
          <div />

          <div className="mb-3" />
          <label htmlFor='email' className="form-label">Email</label>
          <input type='email' className='form-control' id='email' value={userdata.email} name='email' onChange={handleInputs} />
          <div />

          <div className="mb-3" >
            <label htmlFor='password' className="form-label">Password</label>
            <input type='password' className='form-control' id='password' name='password' value={userdata.password} onChange={handleInputs} />
          </div>

          <div className="mb-3" >
            <label htmlFor='inlineRadio1' className="form-label">Role</label>
            <br />
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="userType" id="inlineRadio1" value="user" onChange={handleInputs} />
              <label class="form-check-label" for="inlineRadio1">User</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="userType" id="inlineRadio2" value="admin" onChange={handleInputs} />
              <label class="form-check-label" for="inlineRadio2">Admin</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor='dob' className="form-label">Date of Birth</label>
            <input placeholder="Select date" type="date" id="dob" class="form-control" name='DOB' value={userdata.DOB} onChange={handleInputs} />
          </div>

          <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </>
  )
}
