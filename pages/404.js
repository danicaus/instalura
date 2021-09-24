import React from 'react';
import ErrorPage from '../src/components/patterns/errorPages';

export default function Page404() {
  return (
    <ErrorPage error="notFound" />
  );
}
