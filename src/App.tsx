import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./@themes/default-theme"
import { Header } from "./components/Header"
import { GlobalCss } from "./global-css"
import { Banner } from "./components/Banner"
import { Destination } from "./components/Destination"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Banner />
        <Destination />
        <GlobalCss/>
    </ThemeProvider>
  )
}

export default App
