import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

export interface RegistryDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function RegistryWizard(props: RegistryDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box><h1>Test</h1></Box>
    </Dialog>
  )
}
