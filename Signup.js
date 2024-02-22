import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const [values, setValues] = useState({
    cust_name: '',
    cust_email: '',
    cust_password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});



  const handleInput = (event) => {

    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    //event.preventDefault();
    //setErrors(Validation(values));
    console.log(values)

    axios.post('http://localhost:8081/signup', values)
      .then((res) => {
        navigate('/');
        console.log(res)
      })
      .catch((err) => console.log(err));
  
};

/*useEffect(() => {
  if (errors.name === '' && errors.email === '' && errors.password === '') { }
}, [errors, values, navigate]);*/

return (
  <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
    <div className='bg-white p-3 rounded w-25'>
      {/* <form action='' onSubmit={handleSubmit}> */}
      <h2>Sign_up</h2>
      <div className='mb-3'>
        <label htmlFor='name'><strong>Name</strong></label>
        <input
          type='text'
          placeholder='Enter Name'
          name='cust_name'
          onChange={handleInput}
          className='form-control rounded-0'
        />
        {errors.name && <span className='text-danger'>{errors.name}</span>}
      </div>
      <div className='mb-3'>
        <label htmlFor='email'><strong>Email</strong></label>
        <input
          type='email'
          id='email'
          placeholder='Enter Email'
          name='cust_email'
          onChange={handleInput}
          className='form-control rounded-0'
        />
        {errors.email && <span className='text-danger'>{errors.email}</span>}
      </div>
      <div className='mb-3'>
        <label htmlFor='password'><strong>Password</strong></label>
        <input
          type='password'
          id='password'
          placeholder='Enter Password'
          name='cust_password'
          onChange={handleInput}
          className='form-control rounded-0'
        />
        {errors.password && <span className='text-danger'>{errors.password}</span>}
      </div>
      <button onClick={handleSubmit} type='submit' className='btn btn-success w-100 rounded-0'>
        <strong>Sign up</strong>
      </button>
      <p>You agree to our terms and policies</p>
      <Link className='btn btn-default border w-100 bg-dark rounded-0 text-decoration-none'>
        <strong>Login</strong>
      </Link>
      {/* </form> */}
    </div>
  </div>
);
}

export default Signup;