import React from 'react';
import PropTypes from 'prop-types';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((response) => response.json())
    .then((responseJson) => responseJson.data);

  return {
    props: {
      faqCategories,
    },
  };
}

function FAQPage({ faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas frequentes',
    },
  },
});

FAQPage.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
};
