import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Logo from '../../images/homeDashboardAsset/Group 1096.png';
import Setting from '../../images/homeDashboardAsset/Ellipse 9.png';
import Notification from '../../images/homeDashboardAsset/Group 11.png';
import More from '../../images/homeDashboardAsset/Group 5.png';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withRouter } from 'react-router';

import './style.scss';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  drawerOpen: {
    width: drawerWidth,
    background: '#F0F0F0 0% 0% no-repeat padding-box',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    paddingTop: '15px',
    paddingBottom: '15px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: '#F0F0F0 0% 0% no-repeat padding-box',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(3),
  },
  active: {
    background: '#231F20 0% 0% no-repeat padding-box',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  notActiveIcon: {
    color: 'rgba(193, 191, 191, 1)',
    fontSize: 30,
    marginLeft: -1,
    cursor: 'pointer',
  },
  ActiveIcon: {
    color: 'white',
    fontSize: 28,
    marginLeft: -1,
    cursor: 'pointer',
  },
}));

function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('Home');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, .1)',
        }}
        id="headerBar"
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Grid container justify="flex-start">
                <IconButton
                  edge="start"
                  aria-label="menu"
                  id="menuHolder"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                  })}
                >
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </IconButton>
                <IconButton edge="start" aria-label="logo">
                  <img src={Logo} id="logo" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end">
                <IconButton edge="end" aria-label="notification">
                  <img src={Notification} id="notification" />
                </IconButton>
                <IconButton edge="end" aria-label="setting">
                  <img src={Setting} id="setting" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key={'Home'}
            className={clsx({
              [classes.active]: active === 'Home',
            })}
            onClick={() => {
              setActive('Home');
              props.history.push('/');
            }}
            style={{ margin: '15px auto' }}
          >
            <ListItemIcon>
              <HomeIcon
                className={clsx(
                  {
                    [classes.ActiveIcon]: active === 'Home',
                  },
                  classes.notActiveIcon,
                )}
              />
            </ListItemIcon>
          </ListItem>
          <ListItem
            className={clsx({
              [classes.active]: active === 'Portal',
            })}
            onClick={() => {
              setActive('Portal');
              props.history.push('/portal');
            }}
          >
            <ListItemIcon>
              <SchoolIcon
                className={clsx(
                  {
                    [classes.ActiveIcon]: active === 'Portal',
                  },
                  classes.notActiveIcon,
                )}
              />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MoreHorizIcon src={More} className={classes.notActiveIcon} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content} style={{ overflowX: 'hidden' }}>
        <div className={classes.toolbar} style={{ overflowX: 'hidden' }} />
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(MiniDrawer);
