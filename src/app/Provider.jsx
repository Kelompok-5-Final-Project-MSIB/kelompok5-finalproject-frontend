'use client';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const Providerr = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>;
      </Provider>
      ;
    </>
  );
};

export default Providerr;
