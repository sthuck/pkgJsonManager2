import * as React from 'react';
import {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import Routes from '../Routes';
import {History} from 'history';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
// const theme = createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green,
//   },
//   typography: {
//     useNextVariants: true,
//   },
// });

const palette = {
  primary: purple,
  secondary: {main: '#7E57C2'},
};

const theme = createMuiTheme({
  palette,
  typography: {
    useNextVariants: true,
  },
});
interface Props {
  store: any;
  history: History<any>;
}

export default class Root extends Component<Props> {
  public render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline>
              <Routes />
            </CssBaseline>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
