import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Dashboard() {
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      title: 'Professional Resume',
      templateId: 'template1',
      previewColor: '#1976d2', 
      thumbnail: 'https://th.bing.com/th/id/OIP.Gxk53Yo_YegiXRkHPR7BnwHaE7?rs=1&pid=ImgDetMain', 
      formData: {
        personalInfo: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '(123) 456-7890',
          links: [{ platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' }],
        },
        education: [
          {
            institution: 'Example University',
            location: 'City, Country',
            degreeType: 'B.Sc. Computer Science',
            startDate: '09/2018',
            endDate: '06/2022',
            scores: 'GPA: 3.8/4.0',
          },
        ],
        experience: [
          {
            companyName: 'Tech Corp',
            jobType: 'Software Engineer',
            location: 'City, Country',
            startDate: '07/2022',
            endDate: 'Present',
            description: 'Developed web applications using React and Node.js.',
          },
        ],
        skills: {
          languages: ['JavaScript', 'Python'],
          frameworks: ['React', 'Node.js'],
          tools: ['Git', 'VS Code'],
          databases: ['MongoDB'],
        },
        projects: [
          {
            projectName: 'Portfolio Website',
            technologies: 'React, MUI',
            startDate: '01/2023',
            endDate: '03/2023',
            description: 'Built a personal portfolio to showcase projects.',
            features: 'Responsive design, dark mode.',
          },
        ],
        certificates: [
          {
            name: 'React Developer Certification',
            link: 'https://example.com/cert',
            issuedBy: 'Online Academy',
          },
        ],
        template: 'template1', 
      },

    },
    {
      id: 2,
      title: 'Creative Resume',
      templateId: 'template2',
      previewColor: '#d81b60', 
      thumbnail: 'https://th.bing.com/th/id/OIP.Qo0zF7VMkkz1n_acK7s_UwHaE8?rs=1&pid=ImgDetMain',
      formData: {
        personalInfo: {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '(987) 654-3210',
          links: [{ platform: 'Portfolio', url: 'https://janesmith.art' }],
        },
        education: [
          {
            institution: 'Art Institute',
            location: 'City, Country',
            degreeType: 'B.A. Graphic Design',
            startDate: '09/2017',
            endDate: '06/2021',
            scores: 'GPA: 3.9/4.0',
          },
        ],
        experience: [
          {
            companyName: 'Design Studio',
            jobType: 'Graphic Designer',
            location: 'City, Country',
            startDate: '08/2021',
            endDate: 'Present',
            description: 'Created branding materials and UI designs.',
          },
        ],
        skills: {
          languages: ['HTML', 'CSS'],
          frameworks: ['Figma', 'Adobe XD'],
          tools: ['Photoshop', 'Illustrator'],
          databases: [],
        },
        projects: [
          {
            projectName: 'Branding Project',
            technologies: 'Adobe Suite',
            startDate: '02/2022',
            endDate: '05/2022',
            description: 'Designed a complete brand identity for a startup.',
            features: 'Logo, business cards, website.',
          },
        ],
        certificates: [
          {
            name: 'UI/UX Design Certification',
            link: 'https://example.com/cert',
            issuedBy: 'Design Academy',
          },
        ],
        template: 'template2',
      },

    },
    {
      id: 3,
      title: 'Modern Resume',
      templateId: 'template3',
      previewColor: '#388e3c', 
      thumbnail: 'https://th.bing.com/th/id/OIP.7psitIImHpZoEyVRnz8mGAHaHa?rs=1&pid=ImgDetMain',
      formData: {
        personalInfo: {
          name: 'Alex Johnson',
          email: 'alex.johnson@example.com',
          phone: '(555) 123-4567',
          links: [{ platform: 'GitHub', url: 'https://github.com/alexj' }],
        },
        education: [
          {
            institution: 'Tech College',
            location: 'City, Country',
            degreeType: 'M.Sc. Data Science',
            startDate: '09/2019',
            endDate: '06/2021',
            scores: 'GPA: 3.7/4.0',
          },
        ],
        experience: [
          {
            companyName: 'Data Analytics Ltd',
            jobType: 'Data Scientist',
            location: 'City, Country',
            startDate: '07/2021',
            endDate: 'Present',
            description: 'Analyzed large datasets to drive business decisions.',
          },
        ],
        skills: {
          languages: ['Python', 'R'],
          frameworks: ['TensorFlow', 'Pandas'],
          tools: ['Jupyter', 'Tableau'],
          databases: ['SQL Server', 'PostgreSQL'],
        },
        projects: [
          {
            projectName: 'Predictive Analytics Model',
            technologies: 'Python, Scikit-learn',
            startDate: '03/2022',
            endDate: '06/2022',
            description: 'Built a model to predict customer churn.',
            features: 'High accuracy, real-time predictions.',
          },
        ],
        certificates: [
          {
            name: 'Data Science Professional',
            link: 'https://example.com/cert',
            issuedBy: 'Tech Institute',
          },
        ],
        template: 'template3',
      },
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