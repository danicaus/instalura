/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${propToStyle('display')}
  ${propToStyle('margin')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
  
  &:hover,
  &:focus {
    opacity: .5;
  };

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
    `,
  })};

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;

export default function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: undefined,
};
