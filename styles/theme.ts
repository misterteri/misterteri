// import 'extendTheme' function
import { extendTheme, transition, type ThemeConfig } from "@chakra-ui/react";

// add your color mode configs here
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// extend the theme

const theme = extendTheme(
  {
    fonts: {
      body: "Helvetica",
    },
    modes: {
      light: {
        background: "#FFFFFF",
        primary: "#212B43",
        secondary: "#65CFE6",
        tertiary: "#DDEFF3",
      },
      dark: {
        background: "#0C0E13",
        primary: "#9FADC6",
        secondary: "#394760",
        tertiary: "#60759F",
      },
    },
    colors: {
      primary: "#9FADC6",
      secondary: "#394760",
      tertiary: "#60759F",
      lightprimary: "#212B43",
      lightsecondary: "#65CFE6",
      lighttertiary: "#DDEFF3",
    },
  },
  config
);

export default theme;
