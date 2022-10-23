import  {getAuth} from 'firebase/auth';
import  './App.css';
import app from './firebase/Firebase.init';


const auth = getAuth(app);


const handleregister = (e) =>{
  e.preventDefault();
  const email= e.target.email.value;
  const password= e.target.password.value;
  console.log(email,password)
 

}

function App (){
  return (
    <div className='App'>

      <form onSubmit={handleregister}>

    <input type="email" name="email" id="" placeholder='your Email' /> 
    <br />
    <input type="password" name="password" placeholder='Enter Your Password' />
    <br />
    <button type="submit">Register</button>
    </form>

    </div>
  )
}

export default App ;