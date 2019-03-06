import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';

import {Link} from 'react-router-dom';
import routes from '../constants/routes';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Update packages" />
    </ListItem>
    <Link to={routes.MANAGE_PROJECTS} style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Manage projects" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);
