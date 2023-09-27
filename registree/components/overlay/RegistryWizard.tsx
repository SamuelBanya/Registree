import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import React from 'react';
import { useFormik } from 'formik';
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export interface RegistryDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const RegistryWizard: React.FC<RegistryDialogProps> = ({ open, selectedValue, onClose }) => {

  const handleClose = () => {
    onClose(selectedValue);
  }

  const formik = useFormik({
    initialValues: {
      registreeName: '',
      source: '',
    },
    onSubmit: (values) => {
      console.log(values);
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
    outline: 'none'
  }
  const selectStyle = {
    width: '100%',
    borderRadius: '15px',
    height: isMobileView ? '42px' : '82px',
    marginTop: '20px',
    textIndent: '8px',
    border: '2px solid black',
  }

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth>
      <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box style={{ background: '#3AFF7D', minHeight: '20%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "#000000",
              color: "#ffffff",
              marginRight: '20px',
              fontWeight: 'bold'
            }}
          >
            1
          </Avatar>
          <Divider sx={{ borderColor: "#000000", borderWidth: '2px 0 0', width: '20%', height: '2px', margin: '30px 0' }} />
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "#ffffff",
              color: "#000000",
              marginLeft: '20px',
              fontWeight: 'bold'
            }}
          >
            2
          </Avatar>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80%', width: '100%' }}>
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', top: '15%', width: '100%' }}>
            <form onSubmit={formik.handleSubmit} style={{ width: '80%', margin: '0 auto' }}>
              <h1 style={{ marginBottom: '20px', textAlign: 'left' }}>
                Registree Info
              </h1>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold' }} htmlFor="registreeName">Registree Name</label>
                <input
                  type="text"
                  id="registreeName"
                  name="registreeName"
                  placeholder="Ex: Anniversary List"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.registreeName}
                  style={{ ...inputStyle }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold' }} htmlFor="source">Source</label>
                <FormControl fullWidth>
                  <Select
                    id="source-select"
                    value={formik.values.source}
                    label="Source"
                    onChange={(event) => {
                      formik.setFieldValue('source', event.target.value)
                    }}
                    style={{ ...selectStyle }}
                  >
                    <MenuItem value="Amazon">Amazon</MenuItem>
                    <MenuItem value="Target">Target</MenuItem>
                    <MenuItem value="Walmart">Walmart</MenuItem>
                    <MenuItem value="eBay">eBay</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  style={{
                    width: '100px',
                    height: '50px',
                    backgroundColor: '#000000',
                    color: '#FFC700',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    marginTop: '25px'
                  }}
                >
                  Next Step
                </button>
              </div>
            </form>
          </Box>
        </Box>
      </Box>
    </Dialog >
  );
}

export default RegistryWizard;
