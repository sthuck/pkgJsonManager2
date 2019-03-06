// import {Link} from 'react-router-dom';
// import * as routes from '../constants/routes.json';
import {AppBar, Divider, Drawer, IconButton, List, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ChevronLeft as ChevronLeftIcon, Menu as MenuIcon} from '@material-ui/icons';
import classNames from 'classnames';
import * as React from 'react';
import {Component} from 'react';
import {mainListItems, secondaryListItems} from './home.list';
import {styles} from './Home.style';
import ManageProjects from '../components/ManageProjects/ManageProjects';
import {Switch, Route} from 'react-router';
import routes from '../constants/routes';

interface Props {
  classes: Record<string, string>;
}
interface State {
  open: boolean;
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: true};
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  public handleDrawerClose = () => {
    this.setState({open: false});
  };

  public render() {
    const {classes} = this.props;

    return (
      <div className={classNames(classes.root)} data-tid="container">
        <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              PkgJsonManager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route path={routes.MANAGE_PROJECTS} component={ManageProjects} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
