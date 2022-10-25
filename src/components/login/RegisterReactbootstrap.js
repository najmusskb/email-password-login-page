import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/Firebase.init';


// const auth = getAuth (app)
const auth = getAuth (app)
const RegisterReactbootstrap = () => {

  const [passwordError, setPasswordError ]= useState('');
  const [success , setSuccess]=useState(false)
    const HandleSubmit =(event)=>{
      setSuccess(false)
        event.preventDefault();
        const form = event.target;
    // console.log(event.target.email.value);
    const email=form.email.value;
    const  password=form.password.value;
    console.log(email,password);

    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setPasswordError ('please provide at least two uppercase');
      return;
    }
    if (password.length < 6){
      setPasswordError ('please should be  at least 6  characters');
      return;
    }

    if (!/(?=.*[!@&#$*])/.test(password)){
       setPasswordError ('please add at least 1 special character');
      return;
    }

    setPasswordError('');

    createUserWithEmailAndPassword(auth,email,password)
    .then( result => {
        const user=result.user
        console.log(user)
        setSuccess(true)
        form.reset();
    })
    .catch(error=>{
        console.error("error",error);
        setPasswordError(error.message);
    })
    }
    return (
        <div onSubmit={HandleSubmit} className='w-25 mx-auto border rounded p-3  bg-info mt-5 shadow'>
            <h3 className='text-light text-center p-3'>Please Register !!!! </h3>
            <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <p className=' text-danger  bg-light  p-4  shadow  rounded '>{passwordError}</p>
      {success && <p className='text-success'> User Create a SuccessFully </p>}
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
 </div>
    );
};

export default RegisterReactbootstrap;
