import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import { createRegistree } from '../../lib/api.js';

export interface RegistryDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const RegistryWizard: React.FC<RegistryDialogProps> = ({
  open,
  selectedValue,
  onClose,
}) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      registreeName: '',
      source: '',
    },
    onSubmit: async (values) => {
      try {
        const newRegistree = await createRegistree(values);
        console.log('New registree: ', newRegistree);
      } catch (error) {
        console.log('Error creating registree!', error);
      }
    },
  });

  // Adding mobile specific changes for style changes based on mobile view:
  const theme = useTheme();
  const isMobileView = theme.breakpoints.down('sm');
  const inputStyle = {
    width: '100%',
    borderRadius: '15px',
    height: isMobileView ? '42px' : '82px',
    marginTop: '20px',
    textIndent: '20px',
    border: '2px solid black',
    outline: 'none',
  };
  const selectStyle = {
    width: '100%',
    borderRadius: '15px',
    height: isMobileView ? '42px' : '82px',
    marginTop: '20px',
    textIndent: '8px',
    border: '2px solid black',
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth>
      <Box
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box
          style={{
            background: '#3AFF7D',
            minHeight: '20%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
          }}>
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: currentStep === 1 ? '#000000' : '#ffffff',
              color: currentStep === 1 ? '#ffffff' : '#000000',
              marginRight: '20px',
              fontWeight: 'bold',
            }}>
            1
          </Avatar>
          <Divider
            sx={{
              borderColor: '#000000',
              borderWidth: '2px 0 0',
              width: '20%',
              height: '2px',
              margin: '30px 0',
            }}
          />
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: currentStep === 1 ? '#ffffff' : '#000000',
              color: currentStep === 1 ? '#000000' : '#ffffff',
              marginLeft: '20px',
              fontWeight: 'bold',
            }}>
            2
          </Avatar>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '80%',
            width: '100%',
          }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              top: '15%',
              width: '100%',
            }}>
            {currentStep === 1 && (
              <Step1Form formik={formik} onNext={handleNextStep} />
            )}
            {currentStep === 2 && (
              <Step2Form formik={formik} onPrevious={handlePreviousStep} />
            )}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default RegistryWizard;
