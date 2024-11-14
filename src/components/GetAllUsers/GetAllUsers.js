import React, { useState } from 'react';
import axios from 'axios';
import Table from '../../sharedComponents/table/Table';
import { userTableHelper } from '../../utils/helper/userTableHelper';

function GetAllUsers({ selectedColumn }) {
  const [users, setUsers] = useState([]);
  const [headers, setHeaders] = useState([]);

  const getAllUsersHandler = async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        console.log('No token found, please login');
        return;  
      }

      const response = await axios.get('http://localhost:4000/api/v1/user/getAll', {
        headers: {
          'auth': `${token}`,
        },
      });

      if (!response || !response.data) {
        console.log('User data could not be found');
        return;
      }

      // Log the response data to ensure correct structure
      console.log(response.data);

      if (!selectedColumn) {
        setUsers(response.data);
        if (response.data.length > 0) {
          const userHeaders = Object.keys(response.data[0]); // Get headers from the first object
          setHeaders(userHeaders);
        }
      } else {
        const updatedResponse = userTableHelper(response.data, selectedColumn);
        setUsers(updatedResponse); // Set the filtered user data
        if (updatedResponse.length > 0) {
          const updatedHeaders = Object.keys(updatedResponse[0]); // Get headers from the first object after filtering
          setHeaders(updatedHeaders);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={getAllUsersHandler}>
        Get All Users
      </button>

      {users.length > 0 ? (
        <Table headers={headers} tableData={users} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default GetAllUsers;

