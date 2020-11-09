const white = "#ffffff";
const black = "#000000";

export default {
  type: "dark",
  black,
  white,  
  primary: {
    contrastText: white,
    dark: "#2ac98f",
    main: "#23ad7b",
    light: "#1f976c",
  },
  secondary: {
    contrastText: white,
    dark: "#d98544",
    main: "#ed914a",
    light: "#ff9d51",
  },
  success: {
    contrastText: white,
    dark: "#B6D178",
    main: "#B6D178",
    light: "#D7E9AF",
  },
  error: {
    contrastText: white,
    dark: "#cd0e0e",
    main: "#ff0000",
    light: "#fb4b4b",
  },
  text: {
    primary: "#ffffff",
    secondary: "#888888",
    link: "#888888",
    light: "#cbcbcb",
  },
  link: "#888888",
  icon: "#444444",
  background: {
    default: "#2B2B2B",
    paper: white,
  },
  gray: "#e1e1e1",
  disabled: "#bdbdbd",
  divider: "#cccccc",
  action: {
    main: "#25303d",
    primary: "#23ad7b",
    secondary: "#ed914a",
    cancel: "#828488",
    disabled: "#c6c8cc",
  },
};
