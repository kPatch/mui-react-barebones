import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import CrunchyAppBar from './components/CrunchyAppBar'

const styles = theme => ({
  root: {
    display: 'flex'
  }
})

class App extends Component {
  
  state = {
    open: true,
    appBarTitle: 'Netus Crunchy App'
  }

  setAppBarTitle = (appBarTitle) => {
    this.setState({ appBarTitle: appBarTitle })
  }

  handleAppBarIconClick = () => {
    console.log('HANDLE_APPBAR_ICON_CLICK')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={ classes.root }>
        <CssBaseline />
        <CrunchyAppBar
          open={ this.state.open }
          appBarTitle={ this.state.appBarTitle }
          handleAppBarIconClick={ this.handleAppBarIconClick }
        />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)