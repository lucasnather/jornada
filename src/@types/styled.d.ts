import 'styled-components'
import { defaultTheme } from '../@themes/default-theme'

type ThemeType = typeof defaultTheme

declare module 'styled-compoments' {
    interface DefaultTheme extends ThemeType {}
}