import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./@themes/default-theme"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <h1>Teste</h1>
    </ThemeProvider>
  )
}

export default App
