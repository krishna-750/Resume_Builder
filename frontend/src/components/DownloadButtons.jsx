import React from 'react';
import { Button, Box } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import * as docx from 'docx';

function DownloadButtons({ data }) {
  const downloadPDF = () => {
    const input = document.getElementById('resume-content');
    if (!input) {
      console.error('Element with ID "resume-content" not found');
      return;
    }
    html2canvas(input, {
      scale: 2, // Higher quality
      logging: false,
      useCORS: true,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${data?.personalInfo?.name || 'resume'}-resume.pdf`);
      })
      .catch((error) => {
        console.error('Failed to generate PDF:', error);
      });
  };

  const downloadWord = async () => {
    const { Document, Paragraph, TextRun, HeadingLevel, Packer } = docx;

    try {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [
                  new TextRun({
                    text: data?.personalInfo?.name || 'Name',
                    bold: true,
                    size: 28,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${data?.personalInfo?.email || 'Email'} | ${
                      data?.personalInfo?.phone || 'Phone'
                    }`,
                    size: 22,
                  }),
                ],
              }),
              // Add more sections for education, experience, skills, projects, certificates as needed
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${data?.personalInfo?.name || 'resume'}-resume.docx`);
    } catch (error) {
      console.error('Failed to generate Word document:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 2,
        mb: 2,
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 1,
        padding: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Button
        variant="contained"
        onClick={downloadPDF}
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        Download PDF
      </Button>
      <Button
        variant="contained"
        onClick={downloadWord}
        sx={{
          backgroundColor: '#1e88e5',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        Download Word
      </Button>
    </Box>
  );
}

export default DownloadButtons;