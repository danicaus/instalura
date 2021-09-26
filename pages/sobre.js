import React from 'react';
import ErrorPage from '../src/components/screens/errorPages';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutPage() {
  return (
    <ErrorPage error="underConstruction" />
  );
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
