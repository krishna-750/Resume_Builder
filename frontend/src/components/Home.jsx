import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
  Fade,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import TemplateIcon from '@mui/icons-material/ViewModule';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(null);
  const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    const fetchUserCount = async () => {
      console.log('Fetching user count from http://localhost:5000/user-count');
      try {
        const response = await axios.get('http://localhost:5000/user-count');
        console.log('Full response:', response);
        console.log('User count:', response.data.user_count);
        setUserCount(response.data.user_count);
        setShowCount(true);
        console.log('State updated: userCount=', response.data.user_count, 'showCount=true');
      } catch (error) {
        console.error('Failed to fetch user count:', error.message);
        if (error.response) {
          console.error('Error response:', error.response.data);
        }
        setUserCount(null);
        setShowCount(true);
      }
    };

    fetchUserCount();
  }, []);

  const features = [
    {
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      title: 'Easy to Create',
      description: 'Create professional resumes in minutes with our intuitive interface.',
    },
    {
      icon: <TemplateIcon sx={{ fontSize: 40 }} />,
      title: 'Multiple Templates',
      description: 'Choose from a variety of professionally designed templates.',
    },
    {
      icon: <DownloadIcon sx={{ fontSize: 40 }} />,
      title: 'Download & Share',
      description: 'Download your resume in PDF format and share it with potential employers.',
    },
  ];

  const handleGetStarted = () => {
    console.log('Get Started clicked, navigating to /dashboard');
    navigate('/register', { state: { userCount } });
  };

  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(https://source.unsplash.com/random?resume)`,
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', py: 8 }}>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Create Your Professional Resume
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Build a stunning resume that stands out from the crowd. Choose from our professional
            templates and create your perfect resume in minutes.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleGetStarted}
            sx={{ mt: 2, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
          >
            Get Started
          </Button>
          {showCount && (
            <Fade in={showCount}>
              <Typography
                variant="h6"
                color="inherit"
                sx={{ mt: 2, opacity: 0.9 }}
              >
                {userCount !== null
                  ? ` ${userCount} users already creating their resumes!`
                  : ' many users already creating their resumes!'}
              </Typography>
            </Fade>
          )}
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          Why Choose Our Resume Builder?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>{feature.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;