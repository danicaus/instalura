import styled, { css } from "styled-components";
import get from 'lodash/get';
import { TextStyleVariantsMap } from "../../foundation/Text";

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`

const ButtonDefault = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;

  ${TextStyleVariantsMap.smallestException}

  transition: opacity${( { theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`