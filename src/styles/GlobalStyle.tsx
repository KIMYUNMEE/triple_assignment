import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset}
    strong{font-weight:bold;}
`
export default GlobalStyles
