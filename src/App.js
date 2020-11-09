import HomeProvider from './components/contexts/comic.provider';
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { Route, Switch } from "react-router-dom";
import Comics from './pages/comics/index';
import Favorites from './pages/favorites/index';
import './assets/scss/index.scss';
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <HomeProvider>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route path="/" component={Comics} exact />
          <Route path="/comics" component={Comics} exact />
          <Route path="/favorites" component={Favorites} exact />
      </ThemeProvider>
    </HomeProvider>
  );
}

export default App;
