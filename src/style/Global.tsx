import { createGlobalStyle } from 'styled-components'
import { OBridgeTheme } from '@obridge/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends OBridgeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Titillium Web', sans-serif;
  }
  body {
    background-color: rgb(0, 26, 23);

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
