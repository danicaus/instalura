import styled from "styled-components";
import propToStyle from "../../../../theme/utils/propToStyle";


export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`