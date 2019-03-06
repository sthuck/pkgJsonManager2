import React from 'react';
import {Card, CardHeader, CardContent, withStyles} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {styles} from './ManageProjects.style';
import classNames from 'classnames';

interface Props {
  classes: Record<string, string>;
}

class ManageProjects extends React.Component<Props> {
  render() {
    const {classes} = this.props;
    return (
      <Card className={classNames(classes.card)}>
        <CardHeader title="Manage Projects" />
        <CardContent>
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ManageProjects);
