import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Create from './pages/Create';
import Notes from './pages/Notes';
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe' //the text color is autom. changed
    },
    secondary: purple // object!
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
        </Switch>      
      </Router>
    </ThemeProvider>
  );
}

export default App;
