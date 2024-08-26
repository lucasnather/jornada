import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./@themes/default-theme"
import { Header } from "./components/Header"
import { GlobalCss } from "./global-css"
import { Banner } from "./components/Banner"
import { Destination } from "./components/Destination"
import { BannerFooter } from "./components/BannerFooter"
import { Footer } from "./components/Footer"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Banner />
        <Destination />
        <BannerFooter/>
        <Footer />
        <GlobalCss/>
    </ThemeProvider>
  )
}

export default App
