import * as React from 'react';

import { Slide } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

interface DialogProps {
    title: string | null;
    openDialog: boolean;
    handleClose: () => void;
    children: JSX.Element | JSX.Element[]
}

export const ValidateDialog = ({ title, openDialog, handleClose, children }: DialogProps) => {

    return (
        <Dialog
            open={openDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            style={{ zIndex: 1000,  }}
        >
            <DialogTitle className='text-center'>{title}</DialogTitle>
            <>
                {children}
            </>
        </Dialog>
    );
}
