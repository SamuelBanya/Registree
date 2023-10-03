import { useFormik } from 'formik';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface StepProps {
  formik: ReturnType<typeof useFormik>;
  onNext: () => void;
}

const Step1Form: React.FC<StepProps> = ({ formik, onNext }) => {
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
    type="button"
    onClick={onNext}
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
  )
}

export default Step1Form;
