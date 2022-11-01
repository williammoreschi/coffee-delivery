import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Header } from './components/Header'
import { Home } from './pages/Home'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Header />
    <Home />
    <GlobalStyle />
    </ThemeProvider>
  )
}
