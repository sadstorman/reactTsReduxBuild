import * as React from 'react';

import { Slide, SlideProps, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

interface Props {
  title: string;
  severity: 'success' | 'error';
  openAlert: boolean;
  setOpenAlert: (args: boolean) => void;
}

export default function snakBar({ title = 'Validado correctamente', severity = 'success', openAlert, setOpenAlert }: Props) {

  function handleClose() {
    setOpenAlert(false)
  }

  return (
    <Snackbar
      style={{ cursor: 'default' }}
      open={openAlert}
      TransitionComponent={SlideTransition}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert sx={{ width: '100%' }} severity={severity} color={severity}>
        {title}
      </Alert>

    </Snackbar>
  );
}

