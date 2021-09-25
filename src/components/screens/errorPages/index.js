import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import underConstruction from './animations/underConstruction.json';
import notFound from './animations/notFound.json';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

export default function ErrorPage({ error }) {
  const animation = {
    notFound,
    underConstruction,
  };

  const description = {
    notFound: 'Oops... Essa página não foi encontrada!',
    underConstruction: 'Oops... Essa página está em construção',
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      padding="3vh"
      margin="auto"
    >
      <Lottie
        width="100%"
        heigh="100%"
        config={{ animationData: animation[error] }}
      />
      <Text
        tag="h1"
        variant="title"
        color="primary.main"
      >
        {description[error]}
      </Text>
    </Box>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.string.isRequired,
};
