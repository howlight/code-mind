import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { Paths } from '~/constants/paths';
import { useIsAuth } from '~/store/hooks/useIsAuth';

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const isAuth = useIsAuth();

  if (!isAuth) {
    return <Navigate to={Paths.REGISTER} replace />;
  }

  return children;
};
