import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Container/Container.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster />
    </Container>
  );
};
