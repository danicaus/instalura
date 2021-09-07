import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  padding: 0 28px;
  margin: 0 auto;
  max-width: initial;

  ${breakpointsMedia({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding: 0 16px; 
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${propToStyle('marginTop')}

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  max-width: 100%;
  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }
    if (typeof value === 'object') {
      return breakpointsMedia({
        xs: value?.xs
          ? css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        ` : '',
        sm: value?.sm
          ? css`
          flex: 0 0 ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        ` : '',
        md: value?.md
          ? css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        ` : '',
        lg: value?.lg
          ? css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        ` : '',
        xl: value?.xs
          ? css`
          flex: 0 0 ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        ` : '',
      });
    }
    return '';
  }};
  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    if (typeof offset === 'object') {
      return breakpointsMedia({
        xs: offset?.xs
          ? css`
          margin-left: ${(100 * offset.xs) / 12}%;
        ` : '',
        sm: offset?.sm
          ? css`
          margin-left: ${(100 * offset.sm) / 12}%;
        ` : '',
        md: offset?.md
          ? css`
          margin-left: ${(100 * offset.md) / 12}%;
        ` : '',
        lg: offset?.lg
          ? css`
          margin-left: ${(100 * offset.lg) / 12}%;
        ` : '',
        xl: offset?.xl
          ? css`
          margin-left: ${(100 * offset.xl) / 12}%;
        ` : '',
      });
    }
    return '';
  }}

  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
`;

Col.defaultProps = {
  value: {},
  offset: {},
};

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
