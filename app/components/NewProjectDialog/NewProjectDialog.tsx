import React, {SyntheticEvent} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import ProjectActions from '../../actions/projects';
import {uuidv4} from '../../utils';

interface Props {
  open: boolean;
  onClose(): void;
  addProject(name: string): void;
}

class NewProjectDialog extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }
  onCreate = () => {
    this.props.addProject(this.state.name);
  };
  onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({name: e.target.});
  };
  onCacnel = () => {};

  render() {
    const {name} = this.state;
    return (
      <div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates occasionally.
            </DialogContentText>
            <TextField value={name} onChange={} autoFocus margin="dense" id="name" label="Project Name" type="text" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addProject(name: string) {
      dispatch(ProjectActions.addProject(uuidv4(), name));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectDialog);
