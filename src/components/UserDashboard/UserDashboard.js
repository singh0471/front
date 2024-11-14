// import React from 'react'
// import { useParams } from 'react-router-dom'

// function UserDashboard() {
//     const params = useParams();
//   return (
//     <div>
//         <h1>User dashboard</h1>
//         <h2>{params.id}</h2>
//     </div>
//   )
// }

// export default UserDashboard

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function UserDashboard() {
    const params = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
  
    const role = searchParams.get('role');

    return (
        <div>
            <h1>User Dashboard</h1>
            <h2>User ID: {params.id}</h2>
            <h3>Role: {role}</h3>
        </div>
    );
}

export default UserDashboard;
