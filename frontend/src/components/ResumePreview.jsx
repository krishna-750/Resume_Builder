import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

function ResumePreview({ data }) {
  const getTemplateStyles = () => {
    switch (data.template) {
      case 'template1': // Professional
        return {
          headingFont: {
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
          },
          bodyFont: {
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'normal',
          },
          sectionTitle: {
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          },
        };
      case 'template2': // Creative
        return {
          headingFont: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'normal',
            fontStyle: 'italic',
            letterSpacing: '0.5px',
          },
          bodyFont: {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 'normal',
            fontStyle: 'italic',
          },
          sectionTitle: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'normal',
            fontStyle: 'italic',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          },
        };
      case 'template3': // Modern
        return {
          headingFont: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            letterSpacing: '0.5px',
          },
          bodyFont: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 'normal',
          },
          sectionTitle: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          },
        };
      default:
        return {
          headingFont: {},
          bodyFont: {},
          sectionTitle: {},
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <Box id="resume-content" sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            ...styles.headingFont,
          }}
        >
          {data.personalInfo.name || 'Your Name'}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            ...styles.bodyFont,
          }}
        >
          {data.personalInfo.email || 'email@example.com'} | {data.personalInfo.phone || '123-456-7890'}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            ...styles.bodyFont,
            '& a': {
              color: '#1976d2',
              textDecoration: 'none',
              marginX: 1,
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
        >
          {data.personalInfo.links &&
            data.personalInfo.links.map((link, index) => (
              <React.Fragment key={index}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform || 'Platform'}
                </Link>
                {index < data.personalInfo.links.length - 1 && ' | '}
              </React.Fragment>
            ))}
        </Typography>
      </Box>

      {/* Education Section */}
      <Box sx={{ textAlign: 'left', mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#2c3e50',
            ...styles.sectionTitle,
          }}
        >
          EDUCATION
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {data.education &&
          data.education.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    ...styles.headingFont,
                  }}
                >
                  {edu.institution || 'Institution'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'right',
                    ...styles.bodyFont,
                  }}
                >
                  {edu.location || 'Location'}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    ...styles.bodyFont,
                  }}
                >
                  {edu.degreeType || 'Degree'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'right',
                    ...styles.bodyFont,
                  }}
                >
                  {edu.startDate || 'Start'} - {edu.endDate || 'End'}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mt: 0.5,
                  ...styles.bodyFont,
                }}
              >
                Scores: {edu.scores || 'N/A'}
              </Typography>
              {index < data.education.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))}
      </Box>

      {/* Experience Section */}
      <Box sx={{ textAlign: 'left', mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: '#2c3e50',
            ...styles.sectionTitle,
          }}
        >
          EXPERIENCE
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {data.experience &&
          data.experience.map((exp, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    ...styles.headingFont,
                  }}
                >
                  {exp.companyName || 'Company'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'right',
                    ...styles.bodyFont,
                  }}
                >
                  {exp.startDate || 'Start'} - {exp.endDate || 'End'}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    ...styles.bodyFont,
                  }}
                >
                  {exp.jobType || 'Role'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'right',
                    ...styles.bodyFont,
                  }}
                >
                  {exp.location || 'Location'}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  ...styles.bodyFont,
                }}
              >
                {exp.description || 'Description'}
              </Typography>
              {index < data.experience.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))}
      </Box>

      {/* Skills Section */}
      <Box sx={{ textAlign: 'left', mt: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#2c3e50',
            ...styles.sectionTitle,
          }}
        >
          SKILLS
        </Typography>
        <Divider sx={{ mb: 0.5 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {data.skills?.languages?.length > 0 && (
            <Typography variant="body2" sx={styles.bodyFont}>
              <span style={{ fontWeight: 'bold' }}>Languages:</span> {data.skills.languages.join(', ')}
            </Typography>
          )}
          {data.skills?.frameworks?.length > 0 && (
            <Typography variant="body2" sx={styles.bodyFont}>
              <span style={{ fontWeight: 'bold' }}>Libraries / Frameworks:</span>{' '}
              {data.skills.frameworks.join(', ')}
            </Typography>
          )}
          {data.skills?.tools?.length > 0 && (
            <Typography variant="body2" sx={styles.bodyFont}>
              <span style={{ fontWeight: 'bold' }}>Tools / Platforms:</span> {data.skills.tools.join(', ')}
            </Typography>
          )}
          {data.skills?.databases?.length > 0 && (
            <Typography variant="body2" sx={styles.bodyFont}>
              <span style={{ fontWeight: 'bold' }}>Databases:</span> {data.skills.databases.join(', ')}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Projects Section */}
      <Box sx={{ textAlign: 'left', mt: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#2c3e50',
            ...styles.sectionTitle,
          }}
        >
          PROJECTS
        </Typography>
        <Divider sx={{ mb: 0.5 }} />
        {data.projects &&
          data.projects.map((project, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    ...styles.headingFont,
                  }}
                >
                  {project.projectName || 'Project'}
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 0.5,
                      ...styles.bodyFont,
                    }}
                  >
                    {project.technologies || 'Technologies'}
                  </Typography>
                  <Typography variant="body1" sx={styles.bodyFont}>
                    {project.startDate || 'Start'} - {project.endDate || 'End'}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  ...styles.bodyFont,
                }}
              >
                {project.description || 'Description'}
              </Typography>
              <Typography variant="body2" sx={styles.bodyFont}>
                <span style={{ fontWeight: 'bold' }}>Key Features:</span> {project.features || 'Features'}
              </Typography>
              {index < data.projects.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))}
      </Box>

      {/* Certificates Section */}
      <Box sx={{ textAlign: 'left', mt: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#2c3e50',
            ...styles.sectionTitle,
          }}
        >
          CERTIFICATES
        </Typography>
        <Divider sx={{ mb: 0.5 }} />
        {data.certificates &&
          data.certificates.map((cert, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    color: '#1976d2',
                  },
                  ...styles.bodyFont,
                }}
              >
                <Typography variant="body2">
                  {cert.name || 'Certificate'} - {cert.issuedBy || 'Issuer'}
                </Typography>
              </Link>
              {index < data.certificates.length - 1 && <Divider sx={{ my: 1 }} />}
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default ResumePreview;