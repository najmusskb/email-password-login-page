import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/Firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [useremail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true);
            })
            .catch(error => {
                console.error('error', error)
            })


    }

    const handleEmailBlur = event => {

        const email = event.target.value;

        setUserEmail(email);
        console.log(email)


    }

    const handleForgetPassword = () => {
        if (!useremail){
            alert('please Enter Your email Address')
        }
        sendPasswordResetEmail(auth, useremail)      
        .then ( ()=>{
            alert('reset password email')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div >

            <form onSubmit={handleSubmit} className='w-25 mx-auto border rounded p-3  bg-info mt-5 shadow'>
                <h3 className='text-success'>Plaase log in !!!</h3>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Enter Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Type Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Enter Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Type Your PassWord" required />
                </div>
                <button className='btn btn-primary' type="submit">Login</button>
                <p>New To this website ? Please <Link to="/register">Register</Link> </p>
                {success && <h2>please varify your email address</h2>}

                <p>ok please forget password ? <small><button onClick={handleForgetPassword} className='btn btn-link '>Please Reset</button></small></p>
            </form>
        </div>
    );
};

export default LoginBootstrap;