import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Dashboard() {
  const navigate = useNavigate();

  const templates = [
    {
      
    },
    {
      
    },
    {
     
    },
  ];


  

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

      <Grid container spacing={3}>
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={4} key={template.id}>
            <Card
              sx={{
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                },
                border: `2px solid ${template.previewColor}`,
                borderRadius: '8px',
              }}
            >
              {template.thumbnail && (
                <CardMedia
                  component="img"
                  height="140"
                  image={template.thumbnail}
                  alt={`${template.title} preview`}
                  sx={{ objectFit: 'cover' }}
                />
              )}
              <CardContent sx={{ backgroundColor: '#fff', padding: 2 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: 'bold', color: template.previewColor }}
                >
                  {template.title}
                </Typography>
                <Typography color="textSecondary" sx={{ mt: 1 }}>
                  Click to customize this template
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: 'center',
                  padding: 2,
                  backgroundColor: '#fafafa',
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={() =>
                    navigate('/create-resume', {
                      state: { templateData: template.formData },
                    })
                  }
                  sx={{
                    backgroundColor: template.previewColor,
                    '&:hover': {
                      backgroundColor: darkenColor(template.previewColor, 0.1),
                    },
                  }}
                >
                  Select Template
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// Utility function to darken a hex color

const darkenColor = (hex, percent) => {
  const num = parseInt(hex.replace('#', ''), 16),
    amt = Math.round(2.55 * percent * 100),
    R = (num >> 16) - amt,
    G = ((num >> 8) & 0x00ff) - amt,
    B = (num & 0x0000ff) - amt;
  return (
    '#' +
    (0x1000000 + (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 0 ? 0 : B) : 255))
      .toString(16)
      .slice(1)
  );
};

export default Dashboard;