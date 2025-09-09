import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ResumePreview from './ResumePreview';
import { useLocation } from 'react-router-dom';
import DownloadButtons from './DownloadButtons';

const steps = [
  'Personal Information',
  'Education',
  'Experience',
  'Skills',
  'Projects',
  'Certificates',
  'Template Selection',
];

function CreateResume() {
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();

  // Initialize formData with default or template data
  const defaultFormData = {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      links: [{ platform: '', url: '' }],
    },
    education: [
      {
        institution: '',
        location: '',
        degreeType: '',
        startDate: '',
        endDate: '',
        scores: '',
      },
    ],
    experience: [
      {
        companyName: '',
        jobType: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    skills: {
      languages: [],
      frameworks: [],
      tools: [],
      databases: [],
    },
    projects: [
      {
        projectName: '',
        technologies: '',
        startDate: '',
        endDate: '',
        description: '',
        features: '',
      },
    ],
    certificates: [
      {
        name: '',
        link: '',
        issuedBy: '',
      },
    ],
    template: '',
  };

  const [formData, setFormData] = useState(defaultFormData);

  // Load template data from navigation state
  useEffect(() => {
    if (location.state?.templateData) {
      setFormData(location.state.templateData);
    }
  }, [location.state]);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (section, field, value) => {
    setFormData((prev) => {
      if (section === 'template') {
        return {
          ...prev,
          template: value,
        };
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      };
    });
  };

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...formData.personalInfo.links];
    newLinks[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        links: newLinks,
      },
    }));
  };

  const addLink = () => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        links: [...prev.personalInfo.links, { platform: '', url: '' }],
      },
    }));
  };

  const removeLink = (index) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        links: prev.personalInfo.links.filter((_, i) => i !== index),
      },
    }));
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      education: newEducation,
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          institution: '',
          location: '',
          degreeType: '',
          startDate: '',
          endDate: '',
          scores: '',
        },
      ],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...formData.experience];
    newExperience[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      experience: newExperience,
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          companyName: '',
          jobType: '',
          location: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const handleSkillChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: value.split(',').map((skill) => skill.trim()),
      },
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      projects: newProjects,
    }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          projectName: '',
          technologies: '',
          startDate: '',
          endDate: '',
          description: '',
          features: '',
        },
      ],
    }));
  };

  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const handleCertificateChange = (index, field, value) => {
    const newCertificates = [...formData.certificates];
    newCertificates[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      certificates: newCertificates,
    }));
  };

  const addCertificate = () => {
    setFormData((prev) => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        {
          name: '',
          link: '',
          issuedBy: '',
        },
      ],
    }));
  };

  const removeCertificate = (index) => {
    setFormData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index),
    }));
  };

  const getTemplateStyles = (template) => {
    switch (template) {
      case 'template1':
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
          inputFont: {
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'normal',
          },
        };
      case 'template2':
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
          inputFont: {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 'normal',
            fontStyle: 'italic',
          },
        };
      case 'template3':
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
          inputFont: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 'normal',
          },
        };
      default:
        return {
          headingFont: {},
          bodyFont: {},
          sectionTitle: {},
          inputFont: {},
        };
    }
  };

  const renderStepContent = (step) => {
    const styles = getTemplateStyles(formData.template);

    const textFieldProps = {
      InputProps: {
        sx: styles.inputFont,
      },
      InputLabelProps: {
        sx: styles.inputFont,
      },
    };

    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                value={formData.personalInfo.name}
                onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
                InputProps={{
                  onInput: (e) => {
                    const input = e.target;
                    input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Removes non-alphabetical characters
                  },
                  sx: styles.headingFont,
                }}
                InputLabelProps={{ sx: styles.bodyFont }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
                InputProps={{ sx: styles.bodyFont }}
                InputLabelProps={{ sx: styles.bodyFont }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                value={formData.personalInfo.phone}
                onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
                InputProps={{
                  onInput: (e) => {
                    const input = e.target;
                    input.value = input.value.replace(/[^0-9]/g, ''); // Removes non-numeric characters
                  },
                  sx: styles.bodyFont,
                }}
                InputLabelProps={{ sx: styles.bodyFont }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1, ...styles.sectionTitle }}>
                Links
              </Typography>
              {formData.personalInfo.links.map((link, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    label="Platform (e.g., GitHub)"
                    value={link.platform}
                    onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}
                    sx={{ flex: 1 }}
                    InputProps={{
                      onInput: (e) => {
                        const input = e.target;
                        input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Removes non-alphabetical characters
                      },
                      sx: styles.bodyFont,
                    }}
                    InputLabelProps={{ sx: styles.bodyFont }}
                  />
                  <TextField
                    label="URL"
                    value={link.url}
                    onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                    sx={{ flex: 2 }}
                    InputProps={{
                      onInput: (e) => {
                        const input = e.target;
                        input.value = input.value.replace(
                          /[^a-zA-Z0-9:/.?&=_\-]/g,
                          ''
                        );
                      },
                      sx: styles.bodyFont,
                    }}
                    InputLabelProps={{ sx: styles.bodyFont }}
                  />
                  {index > 0 && (
                    <Button onClick={() => removeLink(index)} color="error" size="small">
                      Remove
                    </Button>
                  )}
                </Box>
              ))}
              <Button onClick={addLink} variant="outlined" startIcon={<AddIcon />} sx={{ mb: 3 }}>
                Add Link
              </Button>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Box>
            {formData.education.map((edu, index) => (
              <Paper key={index} sx={{ p: 3, mb: 2, backgroundColor: '#f8f9fa' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Education {index + 1}
                      {index > 0 && (
                        <Button
                          color="error"
                          size="small"
                          onClick={() => removeEducation(index)}
                          sx={{ float: 'right' }}
                        >
                          Remove
                        </Button>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Institution"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Location"
                      value={edu.location}
                      onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                      InputProps={{
                        onInput: (e) => {
                          const input = e.target;
                          input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
                        },
                        ...textFieldProps,
                      }}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Degree Type"
                      value={edu.degreeType}
                      onChange={(e) => handleEducationChange(index, 'degreeType', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Scores"
                      value={edu.scores}
                      onChange={(e) => handleEducationChange(index, 'scores', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Start Date (MM/YYYY)"
                      placeholder="05/2018"
                      value={edu.startDate}
                      onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                      InputProps={{
                        onInput: (e) => {
                          const input = e.target;
                          input.value = input.value.replace(/[^0-9]/g, ''); // Removes all characters except numbers and '/'
                        },
                        ...textFieldProps,
                      }}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="End Date (MM/YYYY)"
                      placeholder="06/2022"
                      value={edu.endDate}
                      onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                      InputProps={{
                        onInput: (e) => {
                          const input = e.target;
                          input.value = input.value.replace(/[^0-9]/g, ''); // Removes all non-numeric characters
                        },
                        ...textFieldProps,
                      }}
                      {...textFieldProps}
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={addEducation}
              sx={{ mt: 2 }}
            >
              Add Education
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box>
            {formData.experience.map((exp, index) => (
              <Paper key={index} sx={{ p: 3, mb: 2, backgroundColor: '#f8f9fa' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Experience {index + 1}
                      {index > 0 && (
                        <Button
                          color="error"
                          size="small"
                          onClick={() => removeExperience(index)}
                          sx={{ float: 'right' }}
                        >
                          Remove
                        </Button>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      value={exp.companyName}
                      onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
                      InputProps={{
                        onInput: (e) => {
                          const input = e.target;
                          input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Only alphabetical characters
                        },
                        ...textFieldProps,
                      }}
                      {...textFieldProps}
                    />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Job Type"
                      value={exp.jobType}
                      onChange={(e) => handleExperienceChange(index, 'jobType', e.target.value)}
                      InputProps={{
                        onInput: (e) => {
                          const input = e.target;
                          input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Only alphabetical characters
                        },
                        ...textFieldProps,
                      }}
                      {...textFieldProps}
                    />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Location"
                      value={exp.location}
                      onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Start Date (MM/YYYY)"
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="End Date (MM/YYYY)"
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Description"
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={addExperience}
              sx={{ mt: 2 }}
            >
              Add Experience
            </Button>
          </Box>
        );
      case 3:
        return (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Skills
            </Typography>
            <TextField
              fullWidth
              label="Languages (comma separated)"
              value={formData.skills.languages.join(', ')}
              onChange={(e) => handleSkillChange('languages', e.target.value)}
              sx={{ mb: 2 }}
              {...textFieldProps}
            />
            <TextField
              fullWidth
              label="Libraries / Frameworks (comma separated)"
              value={formData.skills.frameworks.join(', ')}
              onChange={(e) => handleSkillChange('frameworks', e.target.value)}
              sx={{ mb: 2 }}
              {...textFieldProps}
            />
            <TextField
              fullWidth
              label="Tools / Platforms (comma separated)"
              value={formData.skills.tools.join(', ')}
              onChange={(e) => handleSkillChange('tools', e.target.value)}
              sx={{ mb: 2 }}
              {...textFieldProps}
            />
            <TextField
              fullWidth
              label="Databases (comma separated)"
              value={formData.skills.databases.join(', ')}
              onChange={(e) => handleSkillChange('databases', e.target.value)}
              sx={{ mb: 2 }}
              {...textFieldProps}
            />
          </Box>
        );
      case 4:
        return (
          <Box>
            {formData.projects.map((project, index) => (
              <Paper key={index} sx={{ p: 3, mb: 2, backgroundColor: '#f8f9fa' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Project {index + 1}
                      {index > 0 && (
                        <Button
                          color="error"
                          size="small"
                          onClick={() => removeProject(index)}
                          sx={{ float: 'right' }}
                        >
                          Remove
                        </Button>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Project Name"
                      value={project.projectName}
                      onChange={(e) => handleProjectChange(index, 'projectName', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Technologies Used (comma separated)"
                      value={project.technologies}
                      onChange={(e) => handleProjectChange(index, 'technologies', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Start Date (MM/YYYY)"
                      value={project.startDate}
                      onChange={(e) => handleProjectChange(index, 'startDate', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="End Date (MM/YYYY)"
                      value={project.endDate}
                      onChange={(e) => handleProjectChange(index, 'endDate', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Project Description"
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Key Features"
                      value={project.features}
                      onChange={(e) => handleProjectChange(index, 'features', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={addProject}
              sx={{ mt: 2 }}
            >
              Add Project
            </Button>
          </Box>
        );
      case 5:
        return (
          <Box>
            {formData.certificates.map((cert, index) => (
              <Paper key={index} sx={{ p: 3, mb: 2, backgroundColor: '#f8f9fa' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Certificate {index + 1}
                      {index > 0 && (
                        <Button
                          color="error"
                          size="small"
                          onClick={() => removeCertificate(index)}
                          sx={{ float: 'right' }}
                        >
                          Remove
                        </Button>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Certificate Name"
                      value={cert.name}
                      onChange={(e) => handleCertificateChange(index, 'name', e.target.value)}
                      InputProps={{
                        onInput: (e) => {
                          const input = e.target;
                          input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Removes non-alphabetical characters
                        },
                        ...textFieldProps,
                      }}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Certificate Link"
                      value={cert.link}
                      onChange={(e) => handleCertificateChange(index, 'link', e.target.value)}
                      {...textFieldProps}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Issued By"
                      value={cert.issuedBy}
                      onChange={(e) => handleCertificateChange(index, 'issuedBy', e.target.value)}
                      InputProps={{
                        onInput: (e) => {
                          const input = e.target;
                          input.value = input.value.replace(/[^a-zA-Z\s]/g, ''); // Removes non-alphabetical characters, including numbers
                        },
                        ...textFieldProps,
                      }}
                      {...textFieldProps}
                    />   
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={addCertificate}
              sx={{ mt: 2 }}
            >
              Add Certificate
            </Button>
          </Box>
        );
      case 6:
        return (
          <FormControl fullWidth>
            <InputLabel sx={styles.inputFont}>Select Template</InputLabel>
            <Select
              value={formData.template}
              label="Select Template"
              onChange={(e) => handleChange('template', '', e.target.value)}
              sx={styles.inputFont}
            >
              <MenuItem value="template1" sx={styles.inputFont}>
                Professional
              </MenuItem>
              <MenuItem value="template2" sx={styles.inputFont}>
                Creative
              </MenuItem>
              <MenuItem value="template3" sx={styles.inputFont}>
                Modern
              </MenuItem>
            </Select>
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2%',
        padding: '10px',
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '0 0 40%',
          maxWidth: '40%',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Container maxWidth="md">
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    ...getTemplateStyles(formData.template).headingFont,
                    textAlign: 'center',
                    width: '100%',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                  }}
                >
                  Create New Resume
                </Typography>
                <Stepper
                  activeStep={activeStep}
                  sx={{
                    flex: '1 1 100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& .MuiStep-root': {
                      flex: '1 1 auto',
                      minWidth: '150px',
                    },
                    '& .MuiStepLabel-root': {
                      flexDirection: 'column',
                      alignItems: 'center',
                    },
                    '& .MuiStepLabel-label': {
                      textAlign: 'center',
                      fontSize: '0.8rem',
                    },
                  }}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel sx={getTemplateStyles(formData.template).bodyFont}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {renderStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ ...getTemplateStyles(formData.template).bodyFont, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={getTemplateStyles(formData.template).bodyFont}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Box
        sx={{
          flex: '0 0 58%',
          maxWidth: '58%',
          height: '100%',
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          overflowY: 'auto',
          backgroundColor: '#fff',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >

        <DownloadButtons data={formData} />
        <ResumePreview data={formData} />
      </Box>
    </Box>
  );
}

export default CreateResume;