import React from 'react';
import ErrorPage from '../src/components/screens/errorPages';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Page404() {
  return (
    <ErrorPage error="notFound" />
  );
}

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Página não encontrada',
    },
  },
});
