import palette from "./palette";

const typography = (theme) => ({
  fontFamily: "Oswald SemiBold, Arial",
  h1: {
    color: palette.text.primary,
    fontFamily: "Oswald Bold",
    fontWeight: 500,
    letterSpacing: "-0.24px",
    fontSize: "80px",
  },
  h2: {
    color: palette.text.primary,
    fontFamily: "Oswald SemiBold",
    fontWeight: 500,
    letterSpacing: "-0.24px",
    fontSize: "46px",
  },
  h3: {
    color: palette.text.primary,
    fontFamily: "Oswald Medium",
    fontWeight: 700,
    letterSpacing: "-0.05px",
    fontSize: "20px",
    lineHeight: 1.3,
  },
  h4: {
    fontSize: "18px",
    color: palette.text.primary,
    fontFamily: "Oswald Light",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "-0.10px",
  },
  h5: {
    fontSize: "14px",
    color: palette.text.secondary,
    fontFamily: "Oswald Medium",
    fontWeight: 500,
    letterSpacing: "-0.05px",
  },
  h6: {
    color: palette.text.primary,
    fontFamily: "Oswald SemiBold",
    fontWeight: 500,
    fontSize: "12px",
    letterSpacing: "-0.05px",
  },
  subtitle1: {
    color: palette.text.primary,
    fontFamily: "Oswald SemiBoldItalic",
    letterSpacing: "-0.05px",
    fontSize: "22px",
    lineHeight: 1.45,
  },
  subtitle2: {
    fontSize: "20px",
    color: palette.text.primary,
    fontFamily: "Oswald Semibold",
    fontWeight: 400,
    letterSpacing: "-0.05px",
    lineHeight: 1.2,
  },
  body1: {
    color: palette.text.primary,
    fontFamily: "Oswald Medium",
    fontWeight: 500,
    letterSpacing: "-0.06px",
    fontSize: "14px",
  },
  body2: {
    color: palette.text.secondary,
    fontFamily: "Oswald Medium",
    fontSize: "12px",
    letterSpacing: "-0.04px",
    lineHeight: 1.7,
  },
  button: {
    color: palette.text.primary,
    fontSize: "12px",
  },
  caption: {
    color: palette.text.secondary,
    fontSize: "12px",
    fontFamily: "Oswald Medium",
    letterSpacing: "0.33px",
  },
  overline: {
    color: palette.text.secondary,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.33px",
  },
});

export default typography;
