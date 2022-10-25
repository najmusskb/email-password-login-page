import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  './App.css';
import Main from './components/Layout/Main';
import RegisterReactbootstrap from './components/login/RegisterReactbootstrap';
import LoginBootstrap from './components/LoginBootstrap/LoginBootstrap';



const router= createBrowserRouter([


  {
    path : '/',
    element:<Main></Main>,
    children:[

      {
        path:'/register',
      element:<RegisterReactbootstrap></RegisterReactbootstrap>
    },
      {path:'/login',
      element: <LoginBootstrap></LoginBootstrap>
    }
    ]
  }
]);


function App (){
  return (
    <div className='App'>
   <RouterProvider router={router}></RouterProvider>



 

    </div>
  )
}

export default App ;