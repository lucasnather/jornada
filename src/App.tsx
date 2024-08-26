import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./@themes/default-theme"
import { Header } from "./components/Header"
import { GlobalCss } from "./global-css"
import { Banner } from "./components/Banner"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Banner />
        <GlobalCss/>
    </ThemeProvider>
  )
}

export default App
