import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./@themes/default-theme"
import { Header } from "./components/Header"
import { GlobalCss } from "./global-css"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Header/>
        <GlobalCss/>
    </ThemeProvider>
  )
}

export default App
