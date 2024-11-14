import React from 'react'
import Login from './components/auth/Login'
import './App.css'
import GetAllUsers from './components/GetAllUsers/GetAllUsers'
import {Routes,Route} from 'react-router-dom';
import UserDashboard from './components/UserDashboard/UserDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div>
      {/* <h1 className='welcome'>Welcome To Banking App</h1> */}
      <Login/>
      {/* <GetAllUsers  selectedColumn={['firstName','lastName']}/>  */}

      <Routes>
      <Route exact path = 'UserDashboard/:id' element={<UserDashboard></UserDashboard>}></Route>
      <Route exact path = 'AdminDashboard' element={<AdminDashboard></AdminDashboard>}></Route>
      </Routes>
      {/* <Dashboard></Dashboard> */}
    </div>
  )
}

export default App



// import React from 'react';
// import { useParams, useLocation } from 'react-router-dom';

// function UserDashboard() {
//     const params = useParams();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
    
    
//     const role = searchParams.get('role');

//     return (
//         <div>
//             <h1>User Dashboard</h1>
//             <h2>User ID: {params.id}</h2>
//             <h3>Role: {role}</h3>
//         </div>
//     );
// }

// export default UserDashboard;
