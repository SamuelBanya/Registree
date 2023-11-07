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
  const [error, setError] = useState(null);
  const [formEntries, setFormEntries] = useState([]);

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

    try {
      setFormEntries([...formEntries, formik.values]);

      // Reset the form values:
      formik.resetForm();

      setOpen(true);
      setError(null);
    } catch (error) {
      setError(error);

      console.log('Error: ', error);
    }
  };

  const handleAddItem = () => {
    setFormEntries([...formEntries, formik.values]);

    formik.resetForm();
  };

  const handleEditItem = (index) => {
    const editedItem = formEntries[index];

    formik.setValues(editedItem);
  };

  const handleDeleteItem = (index) => {
    const updatedEntries = [...formEntries];

    updatedEntries.splice(index, 1);

    setFormEntries(updatedEntries);
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
        {error ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Error occurred!
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        )}
      </Snackbar>
      <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
        Registree Info
      </h1>
      <button
        type="button"
        onClick={handleAddItem}
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: '#FFC700',
          color: '#000000',
          borderRadius: '30px',
          fontWeight: 'bold',
          marginTop: '25px',
        }}>
        Add Item
      </button>
      <div>
        {formEntries.map((entry, index) => (
          <div key={index}>
            <h2>Item {index + 1}</h2>
            <div style={{ marginBottom: '10px' }}>
              <label
                style={{ fontWeight: 'bold' }}
                htmlFor={`itemName-${index}`}>
                Item Name
              </label>
              <input
                type="text"
                id={`itemName-${index}`}
                name={`itemName-${index}`}
                value={entry.itemName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ ...inputStyle }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label
                style={{ fontWeight: 'bold' }}
                htmlFor={`itemLink-${index}`}>
                Link
              </label>
              <input
                type="url"
                id={`itemLink-${index}`}
                name={`itemLink-${index}`}
                value={entry.itemLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ ...inputStyle }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label
                style={{ fontWeight: 'bold' }}
                htmlFor={`itemPrice-${index}`}>
                Price
              </label>
              <input
                type="text"
                id={`itemPrice-${index}`}
                name={`itemPrice-${index}`}
                value={entry.itemPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ ...inputStyle }}
              />
            </div>
            <button
              onClick={() => handleEditItem(index)}
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: '#000000',
                color: '#FFC700',
                borderRadius: '30px',
                fontWeight: 'bold',
                marginTop: '25px',
              }}>
              Edit
            </button>
            <button
              onClick={() => handleDeleteItem(index)}
              style={{
                width: '100px',
                height: '50px',
                backgroundColor: '#000000',
                color: '#FFC700',
                borderRadius: '30px',
                fontWeight: 'bold',
                marginTop: '25px',
              }}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={onPrevious}
          style={{
            width: '100px',
            height: '50px',
            backgroundColor: 'red',
            color: 'white',
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
            backgroundColor: 'green',
            color: 'white',
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
