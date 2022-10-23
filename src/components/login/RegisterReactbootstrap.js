import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/Firebase.init';


// const auth = getAuth (app)
const auth = getAuth (app)
const RegisterReactbootstrap = () => {
    const HandleSubmit =(event)=>{
        event.preventDefault();
    // console.log(event.target.email.value);
    const email=event.target.email.value;
    const  password=event.target.password.value;
    console.log(email,password);
    createUserWithEmailAndPassword(auth,email,password)
    .then( result => {
        const user=result.user
        console.log(user)
    })
    .catch(error=>{
        console.error("error",error);

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
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
 </div>
    );
};

export default RegisterReactbootstrap;
