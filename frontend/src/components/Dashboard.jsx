import React from 'react';
import { Container, Typography, Button,  Box, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Dashboard() {
  const navigate = useNavigate();



  

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
          Resume Templates
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/create-resume')}
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Create Blank Resume
        </Button>
      </Box>

      -------------------
    </Container>
  );
}

// Utility function to darken a hex color


export default Dashboard;