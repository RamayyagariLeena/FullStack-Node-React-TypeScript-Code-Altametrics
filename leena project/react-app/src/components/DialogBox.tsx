import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogTable from './DialogTable';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export interface DialogProps {
    open: boolean;
    data: Object;
    setDialogOpen: Dispatch<SetStateAction<State>>
  }

const DialogBox = (props : DialogProps) => {
    const { open, data, setDialogOpen } = props;
    console.log(data, "data")
    const handleClose = () => {
        setDialogOpen(false)
      };
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invoice info</DialogTitle>
        <DialogTable data={data}/>
      </Dialog>
    );
}

export default DialogBox