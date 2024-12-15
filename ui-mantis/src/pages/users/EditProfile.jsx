import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const EditProfile = ({ users }) => {
  const { id } = useParams(); 
  const user = users.find(user => user.id === parseInt(id)); 

  console.log(user)
    const [formData, setFormData] = useState({
        name: user?.firstName || '',
        surname: user?.lastName || '',
        email: user?.email || '',
        bio: user?.bio || '',
        country: user?.country || '',
        address: user?.address || '',
        job: user?.job || ''
      });
    
      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      // Handle form submission (this could be an API call)
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated User Data:', formData);
        alert('Profile updated successfully!');
        // axios.post(`${process.env.PUBLIC_URL}/user/id`, formData) ---> code to update a user in a live app.
      };
//     firstName: '',
//     lastName: '',
//     email: '',
//     bio: '',
//     country: '',
//     address: '',
//     job: ''
//   });

//   useEffect(() => {
//     // 🧑‍💻 Simulate fetching user data (you can replace with an API call)
//     const fetchUserData = async () => {
//       const dummyUserData = {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@example.com',
//         bio: 'A passionate software developer.',
//         country: 'USA',
//         address: '123 Main St, Springfield',
//         job: 'Frontend Developer'
//       };
//       setUser(dummyUserData);
//     };

//     fetchUserData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Updated User Data:', user);
//     alert('Profile updated successfully!');
//     // 🧑‍💻 Send this user data to your backend API for updating
//   };

  return (
    <Box 
      sx={{ 
        width: '100%', 
        maxWidth: 600, 
        mx: 'auto', 
        mt: 4, 
        p: 3, 
        borderRadius: 2, 
        boxShadow: 3, 
        backgroundColor: 'white' 
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Edit Profile
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={user.country}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={user.address}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Job"
              name="job"
              value={user.job}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ mt: 2 }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditProfile;
