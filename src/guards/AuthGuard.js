import React from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function AuthGuard({ children }) {
  const { currentUserdata } = useUser();

  if (currentUserdata) {
    return <>{children}</>;
  } else {
    console.log('# currentUser => ', currentUserdata);
    return <Navigate to="/" />;
  }
}