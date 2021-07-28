import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './helpers';
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";


import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>         
            <Route exact path='/' component={SignupPage}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
