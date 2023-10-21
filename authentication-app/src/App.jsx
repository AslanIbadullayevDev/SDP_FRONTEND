import './App.css';
import React from 'react';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import { Routes, Route} from "react-router-dom";
import ForgotPass from './components/passrecovery/ForgotPass';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Login />}>
//       <Route path="passrecovery" element={<ForgotPass />} />
//       <Route path="signup" element={<SignUp />} />
//     </Route>
//   )
// )

export default function App()
{
 
  return (
    <div>
       {/* <RouterProvider router={router} /> */}
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/passrecovery' element={<ForgotPass />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>

    </div>
  )

}
