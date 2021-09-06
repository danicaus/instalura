import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding: 0 28px;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin: 32px auto 0; 
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      justify-content: space-between;
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `
  })}
`

MenuWrapper.LeftSide = styled.div`
 padding: 0;
 margin: 0;
 order: 1;
 ${breakpointsMedia({
   md: css`
    width: 131px;
    height: 32px;
    order: initial;
    padding-right: 16px;
   `
 })}
`

MenuWrapper.CentralSide = styled.div`
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 17px 0 0;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #99989E;
  padding: 12px;

  ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      max-width: 332px;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding: 0 12px;
    `,
  })}
  
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;

    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.smallestException}
        `,
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `
    })}
  
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }
  }
`

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  order: 2;
  justify-content: flex-end;

  ${breakpointsMedia({
    md: css`
      order: initial;
    `
  })}
`