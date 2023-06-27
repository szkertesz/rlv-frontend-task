import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import App from './App.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'

let theme = createTheme({
  palette: {
    // maximize the contrast between
    // the background and the text.
    contrastThreshold: 4.5,
    background: {
      // paper: '#f6f8fc',
    },
  },
})

theme = responsiveFontSizes(theme)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* change the CSS injection order to give precedence our custom styles over MUI
     https://mui.com/material-ui/guides/interoperability/#css-injection-order
     */}
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
