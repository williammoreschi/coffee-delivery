import { ThemeProvider } from 'styled-components'
import { Coffee } from 'phosphor-react'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <h1><Coffee size={32} /> Coffee Delivery</h1>
    <GlobalStyle />
    </ThemeProvider>
  )
}
