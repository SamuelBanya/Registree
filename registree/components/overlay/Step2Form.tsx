import { useFormik } from 'formik';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

interface StepProps {
  formik: ReturnType<typeof useFormik>;
  onPrevious: () => void;
}

const Step2Form: React.FC<StepProps> = ({ formik, onPrevious }) => {
  const [open, setOpen] = useState(false);

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

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCustomSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    formik.handleSubmit(e);

    // Now that the form has passed validation, throw a success snackbar:
    setOpen(true);
  };

  return (
    <form
      onSubmit={handleCustomSubmit}
      style={{ width: '80%', margin: '0 auto' }}>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
        Registree Info
      </h1>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontWeight: 'bold' }} htmlFor="itemName">
          Item Name
        </label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          placeholder="Ex: Anniversary Gift"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.itemName}
          style={{ ...inputStyle }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontWeight: 'bold' }} htmlFor="itemLink">
          Link
        </label>
        <input
          type="url"
          id="itemLink"
          name="itemLink"
          placeholder="Ex: www.amazon.com/item"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.itemLink}
          style={{ ...inputStyle }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontWeight: 'bold' }} htmlFor="itemPrice">
          Price
        </label>
        <input
          type="number"
          id="itemPrice"
          name="itemPrice"
          placeholder="Ex: $25.00"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.itemPrice}
          style={{ ...inputStyle }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={onPrevious}
          style={{
            width: '100px',
            height: '50px',
            backgroundColor: '#000000',
            color: '#FFC700',
            borderRadius: '30px',
            fontWeight: 'bold',
            marginTop: '25px',
          }}>
          Previous Step
        </button>
        <button
          type="submit"
          style={{
            width: '100px',
            height: '50px',
            backgroundColor: '#000000',
            color: '#FFC700',
            borderRadius: '30px',
            fontWeight: 'bold',
            marginTop: '25px',
          }}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step2Form;
