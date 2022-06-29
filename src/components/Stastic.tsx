import React from 'react'
import styled from 'styled-components'

import {
  STASTIC_CONTENT_COLOR,
  STASTIC_CONTENT_FONTSTYLE,
} from 'styles/fontStyle'

const StasticContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`
const StasticItem = styled.div`
  margin-bottom: 20px;
  font-size: ${STASTIC_CONTENT_FONTSTYLE}px;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: -1px;
  color: ${STASTIC_CONTENT_COLOR};
`

const Stastic: React.FC = () => {
  return (
    <div>
      <StasticContainer>
        <StasticItem>
          <strong>만 명</strong>의 사용자
        </StasticItem>
        <StasticItem>
          <strong>만 개</strong>의 리뷰
        </StasticItem>
        <StasticItem>
          <strong>만 개</strong>의 저장
        </StasticItem>
      </StasticContainer>
    </div>
  )
}

export default Stastic
