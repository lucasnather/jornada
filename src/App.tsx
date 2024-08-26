import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./@themes/default-theme"
import { Header } from "./components/Header"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Header/>
    </ThemeProvider>
  )
}

export default App
