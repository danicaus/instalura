import React from 'react';
import PropTypes from 'prop-types';
import FAQQuestion from '../../src/components/screens/FAQQuestions';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQAnswerPage({ category, question }) {
  return (
    <FAQQuestion category={category} question={question} />
  );
}

export default websitePageHOC(FAQAnswerPage);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((response) => response.json())
    .then((responseJson) => responseJson.data);

  const questionPageData = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const questionData = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true;
      }
      return false;
    });

    return {
      ...valorAcumulado,
      category: faqCategory,
      question: questionData,
    };
  }, {});

  return {
    props: {
      category: questionPageData.category,
      question: questionPageData.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: questionPageData.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((response) => response.json())
    .then((responseJson) => responseJson.data);

  const paths = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const pathsArray = faqCategory.questions.map((question) => (
      { params: { slug: question.slug } }
    ));

    return [
      ...valorAcumulado,
      ...pathsArray,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}

FAQAnswerPage.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      slug: PropTypes.string,
    })),
  }).isRequired,
  question: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
