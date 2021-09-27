/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';

export const TextStyleVariantsMap = {
  title: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
      `,
  })}  
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('display')}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

export default function Text({
  tag,
  variant,
  href,
  children,
  ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        {...props}
      >
        {children}
      </TextBase>
    );
  }
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span', 'input']),
  variant: PropTypes.oneOf(['title', 'subTitle', 'paragraph1', 'smallestException']),
  href: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  href: '',
  children: null,
};
