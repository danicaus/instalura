/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import WebsiteGlobalProvider from '../../components/wrappers/WebsitePage/provider';

const AllTheProviders = ({ children, ...props }) => (
  <WebsiteGlobalProvider {...props}>
    {children}
  </WebsiteGlobalProvider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
