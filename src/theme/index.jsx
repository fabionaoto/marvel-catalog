import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

let theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography,
  overrides,
  props: {
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
