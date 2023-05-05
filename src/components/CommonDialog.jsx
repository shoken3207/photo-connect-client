import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

const CommonDialog = ({ dialogTitle, isOpen, setIsOpen, children }) => {
  return (
    <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default CommonDialog;