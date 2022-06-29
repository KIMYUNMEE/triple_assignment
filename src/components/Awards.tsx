import React from 'react'
import styled from 'styled-components'

import { PLAY_STORE_IMG, APP_STORE_IMG } from 'styles/image'
import {
  AWARDS_CONTENT_COLOR,
  AWARDS_CONTENT_FONTSTYLE,
} from 'styles/fontStyle'

const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  color: ${AWARDS_CONTENT_COLOR};
  font-family: sans-serif;
  font-size: ${AWARDS_CONTENT_FONTSTYLE}px;
  font-weight: bold;
  white-space: nowrap;
`
const PlayStore = styled.div`
  display: inline-block;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  height: 54px;
  line-height: 22px;
  background-image: url(${PLAY_STORE_IMG});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;
`
const AppStore = styled(PlayStore)`
  background-image: url(${APP_STORE_IMG});
`

const Awards: React.FC = () => {
  return (
    <div>
      <AwardsContainer>
        <PlayStore>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </PlayStore>
        <AppStore>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </AppStore>
      </AwardsContainer>
    </div>
  )
}

export default Awards
