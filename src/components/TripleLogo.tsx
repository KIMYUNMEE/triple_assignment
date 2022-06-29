import React from 'react'
import styled from 'styled-components'

import { TRIPLE_LOGO_IMG } from 'styles/image'
import {
  TRIPLE_LOGO_CONTENT_COLOR,
  TRIPLE_LOGO_CONTENT_FONTSTYLE,
} from 'styles/fontStyle'

const LogoContainer = styled.div`
  padding-top: 280px;
  width: 400px;
  height: 338px;
  box-sizing: border-box;
  background-image: url(${TRIPLE_LOGO_IMG});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  text-align: center;
  font-family: sans-serif;
  font-size: ${TRIPLE_LOGO_CONTENT_FONTSTYLE}px;
  font-weight: bold;
  color: ${TRIPLE_LOGO_CONTENT_COLOR};
`
const TripleLogo: React.FC = () => {
  return <LogoContainer>2019년 2월 기준</LogoContainer>
}

export default TripleLogo
