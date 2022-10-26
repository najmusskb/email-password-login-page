import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import RegisterReactbootstrap from './components/login/RegisterReactbootstrap';
import LoginBootstrap from './components/LoginBootstrap/LoginBootstrap';
import Other from './components/others/Other';
const router = createBrowserRouter([


  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/register',
        element: <RegisterReactbootstrap></RegisterReactbootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>
      },
      {
        path: '/others',
        element: <Other></Other>
      }
    ]
  }
]);


function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>





    </div>
  )
}

export default App;