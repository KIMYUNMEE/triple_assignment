import React from 'react'
import styled from 'styled-components'

import useCountUp from 'hooks/useCountUp'
import useVisibility from 'hooks/useVisibility'
import { VisbleProps } from 'common/utils/visibility'
import {
  STASTIC_CONTENT_COLOR,
  STASTIC_CONTENT_FONTSTYLE,
} from 'styles/fontStyle'

const StasticContainer = styled.div<VisbleProps>`
  margin-left: 623px;
  padding-top: 150px;
  transform: translateY(${(props) => (props.transY ? '0px' : '50px')});
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: all 700ms ease-in-out 100ms;
`
const StasticItem = styled.div`
  margin-bottom: 20px;
  font-size: ${STASTIC_CONTENT_FONTSTYLE}px;
  font-family: sans-serif;
  letter-spacing: -1px;
  color: ${STASTIC_CONTENT_COLOR};
`

const Stastic: React.FC = () => {
  const [transY, visiblity] = useVisibility()
  const userCount = useCountUp(350)
  const userReview = useCountUp(21)
  const userStore = useCountUp(650)
  return (
    <div>
      <StasticContainer transY={transY} visible={visiblity}>
        <StasticItem>
          <strong>{userCount}만 명</strong>의 사용자
        </StasticItem>
        <StasticItem>
          <strong>{userReview}만 개</strong>의 리뷰
        </StasticItem>
        <StasticItem>
          <strong>{userStore}만 개</strong>의 저장
        </StasticItem>
      </StasticContainer>
    </div>
  )
}

export default Stastic
