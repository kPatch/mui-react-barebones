import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  },
  typography: {
    useNextVariants: true
  }
})

ReactDOM.render( 
  <MuiThemeProvider theme={ theme }>
    <App />
  </MuiThemeProvider>, 
    document.getElementById('root'))