import * as React from 'react';

import Modal from '@mui/material/Modal';

interface Props {
    openModal: boolean;
    setOpenModal: (arg: boolean) => void;
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const CustomModal = ({ openModal, setOpenModal, children }: Props) => {
    const handleClose = () => setOpenModal(false);
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ zIndex: 100 }}
            >
                {children}
            </Modal>
        </div>
    );
}
