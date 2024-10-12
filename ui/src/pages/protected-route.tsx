// PrivateRoute.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import {  Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../config/firebase.config'; // Adjust the path as needed
import { onAuthStateChanged } from 'firebase/auth';

interface PrivateRouteProps {
  element: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return authenticated ? (
    <>{element}</>
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default PrivateRoute;