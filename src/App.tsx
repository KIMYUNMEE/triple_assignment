import React from 'react'
import styled from 'styled-components'

import TripleLogo from 'components/TripleLogo'

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
        </ContentContainer>
      </main>
    </div>
  )
}
export default App
