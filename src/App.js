import  {getAuth} from 'firebase/auth';
import  './App.css';
import RegisterReactbootstrap from './components/login/RegisterReactbootstrap';
import app from './firebase/Firebase.init';


const auth = getAuth(app);


const handleregister = (e) =>{
  e.preventDefault();
  const email= e.target.email.value;
  const password= e.target.password.value;
  console.log(email,password)
 

}

const HandleEmailOnblur=(e)=>{
  console.log(e.target.value);

}


const HandlePasswordBlue = (e) =>{
  console.log(e.target.value)
  
}

function App (){
  return (
    <div className='App'>



<RegisterReactbootstrap></RegisterReactbootstrap>
 

    </div>
  )
}

export default App ;