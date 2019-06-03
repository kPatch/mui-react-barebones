import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MailIcon from '@material-ui/icons/Mail'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { fade } from '@material-ui/core/styles/colorManipulator'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const styles = theme => ({
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none'
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  }
})

class CrunchyAppBar extends Component {
  render(){
    const { classes } = this.props
    
    return(
      <AppBar
        position="absolute"
        className={ classes.appBar } >
        <Toolbar disableGutters={ !this.props.open } className={ classes.toolbar }>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={ classes.title }>
            { this.props.appBarTitle }
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
          </div>
          <div className={ classes.grow }/>
          <div className={ classes.sectionDesktop }>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon/>
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={5} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton
              aria-owns={'material-appbar'}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
          <IconButton color="inherit">
            <Badge badgeContent={95} color="secondary">
              <NotificationsIcon/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

CrunchyAppBar.propTypes = {
  classes:          PropTypes.object.isRequired,
  open:             PropTypes.bool.isRequired
}

export default withStyles(styles)(CrunchyAppBar)