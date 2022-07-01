import React from 'react'
import styled from 'styled-components'

import useVisibility from 'hooks/useVisibility'
import { VisbleProps } from 'common/utils/visibility'
import { TRIPLE_LOGO_IMG } from 'styles/image'
import {
  TRIPLE_LOGO_CONTENT_COLOR,
  TRIPLE_LOGO_CONTENT_FONTSTYLE,
} from 'styles/fontStyle'

const LogoContainer = styled.div<VisbleProps>`
  position: absolute;
  top: 150px;
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
  transform: translateY(${(props) => (props.transY ? '0%' : '10%')});
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: all 700ms ease-in-out 0ms;
`
const TripleLogo: React.FC = () => {
  const [transY, visiblity] = useVisibility()
  return (
    <LogoContainer transY={transY} visible={visiblity}>
      2019년 2월 기준
    </LogoContainer>
  )
}

export default TripleLogo
