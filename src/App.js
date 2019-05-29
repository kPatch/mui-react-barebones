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
    appBarTitle: ''
  }

  handleDrawerOpen = () => {
    console.log("HANDLE_DRAWER_OPEN")
    this.setState({ open: true })
  };

  handleDrawerClose = () => {
    console.log("HANDLE_DRAWER_CLOSE")
    this.setState({ open: false })
  };

  setAppBarTitle = (appBarTitle) => {
    this.setState({ appBarTitle: appBarTitle })
  }

  handleListItemClick = (appBarTitle) => {
    console.log('HANDLE_LIST_ITEM_CLICK' + appBarTitle)
    this.setState({ appBarTitle: appBarTitle })
  }

  handleAppBarIconClick = () => {
    console.log('HANDLE_APPBAR_ICON_CLICK')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={ classes.root }>
        <CrunchyAppBar
          open={ this.state.open }
          appBarTitle={ this.state.appBarTitle }
          handleDrawerOpen={ this.handleDrawerOpen }
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