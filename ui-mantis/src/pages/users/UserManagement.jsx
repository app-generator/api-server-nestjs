import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      console.log(import.meta.env.VITE_APP_PUBLIC_URL)
      try {
        const urlParams = new URLSearchParams(window.location.search);
        let user = urlParams.get('user');

        if (user) {
          localStorage.setItem('mantis_user', user);
          window.history.replaceState({}, document.title, window.location.pathname);
        }

        user = JSON.parse(localStorage.getItem('mantis_user'));
        setLoggedInUser(user); // Set the logged-in user info

        const response = await axios.get(`${import.meta.env.VITE_APP_PUBLIC_URL}/users`, {
          headers: {
            Authorization: `Bearer ${user.auth_token}`
          }
        });

        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditUser = (userId) => {
    navigate(`/user/edit-profile/${userId}`);
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
            {users.map((user) => {
              const isUserRole = loggedInUser?.role === 'user';
              const isCurrentUser = loggedInUser?.id === user.id;
              const isButtonEnabled = isUserRole ? isCurrentUser : true;

              return (
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
                      color={isButtonEnabled ? 'primary' : 'secondary'}
                      size="small"
                      onClick={() => handleEditUser(user.id)}
                      disabled={!isButtonEnabled}
                      sx={{ 
                        backgroundColor: isButtonEnabled ? 'primary.main' : 'grey.400',
                        '&:hover': { backgroundColor: isButtonEnabled ? 'primary.dark' : 'grey.400' }
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement;
