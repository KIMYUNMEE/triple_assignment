import React from 'react'
import styled from 'styled-components'

import TripleLogo from 'components/TripleLogo'
import Awards from 'components/Awards'
import Stastic from 'components/Stastic'

const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 50px 0;
  width: 1200px;
  height: auto;
`

const App: React.FC = () => {
  return (
    <div>
      <main>
        <ContentContainer>
          <TripleLogo />
          <Stastic />
          <Awards />
        </ContentContainer>
      </main>
    </div>
  )
}
export default App
