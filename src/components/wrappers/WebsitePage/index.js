/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../commons/Menu';
import Footer from '../../commons/Footer';
import Box from '../../foundation/layout/Box';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => { },
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  boxProps,
  menuProps,
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        {...boxProps}
      >
        {menuProps.display && (
          <Menu
            onCadastrarClick={() => setIsModalOpen(true)}
          />
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro
              propsDoModal={propsDoModal}
            />
          )}
        </Modal>
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  boxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
};

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  boxProps: {},
  menuProps: {
    display: true,
  },
};
