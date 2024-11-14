import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigation = useNavigate()
    const handleUserDashboard = (event) => {
        event.preventDefault();
        navigation('/UserDashboard')
    }

    const handleAdminDashboard = (event) => {
        event.preventDefault();
        navigation('/AdminDashboard')

    }

  return (
    <div>
        <button onClick={handleUserDashboard}>user dashboard</button>
        <button onClick={handleAdminDashboard}>admin dashboard</button>
    </div>
  )
}

export default Dashboard