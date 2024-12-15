import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // const users = axios.get(`${process.env.PUBLIC_URL}/users`), code to fetch users, uncomment in your app
    // 🧑‍💻 Dummy user data to display in the table, remove in your app
    const dummyUsers = [
      { 
        id: 1, 
        firstName: 'John', 
        lastName: 'Doe', 
        bio: 'A passionate software developer.', 
        country: 'USA', 
        address: '123 Main St, Springfield', 
        job: 'Frontend Developer', 
        email: 'alice@example.com' 
      },
      { 
        id: 2, 
        firstName: 'Bob', 
        lastName: 'Smith', 
        bio: 'DevOps specialist with a knack for automation.', 
        country: 'Canada', 
        address: '456 Maple Ave, Toronto', 
        job: 'DevOps Engineer', 
        email: 'bob@example.com' 
      },
      { 
        id: 3, 
        firstName: 'Charlie', 
        lastName: 'Brown', 
        bio: 'Creative designer focused on UX/UI.', 
        country: 'UK', 
        address: '789 High St, London', 
        job: 'UI/UX Designer', 
        email: 'charlie@example.com' 
      },
      { 
        id: 4, 
        firstName: 'Dana', 
        lastName: 'White', 
        bio: 'Experienced backend engineer specializing in Node.js.', 
        country: 'Australia', 
        address: '321 Ocean Dr, Sydney', 
        job: 'Backend Engineer', 
        email: 'dana@example.com' 
      },
      { 
        id: 5, 
        firstName: 'Eve', 
        lastName: 'Adams', 
        bio: 'Product manager with over 10 years of experience.', 
        country: 'Germany', 
        address: '654 Gartenstr, Berlin', 
        job: 'Product Manager', 
        email: 'eve@example.com' 
      }
    ];

    // Simulate network delay (optional)
    setTimeout(() => {
      setUsers(dummyUsers);
    }, 1000);
  }, []);

  const handleEditUser = (userId) => {
    navigate(`/user/edit-profile/${userId}`)
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <h1>User Management</h1>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Bio</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Job</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow 
                key={user.id} 
                hover 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.bio}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.job}</TableCell>
                <TableCell align="center">
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="small" 
                    onClick={() => handleEditUser(user.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement;
