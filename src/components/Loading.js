import React from 'react';
import { CircularProgress, Dialog, DialogContent } from '@mui/material';
import useLoading from '../hooks/useLoading';
import { COLOR_PRIMARY } from '../utils/constants';

export default function Loading() {
  const { isLoading } = useLoading();
  return (
    <Dialog open={isLoading}>
      <DialogContent sx={{ bgcolor: '#000000' }}>
        <CircularProgress sx={{ color: COLOR_PRIMARY }} />
      </DialogContent>
    </Dialog>
  );
}