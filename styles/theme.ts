// import 'extendTheme' function
import { extendTheme, transition, type ThemeConfig } from "@chakra-ui/react";

// add your color mode configs here
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
      600: "#5e9ed6",
      500: "#73b9f6",
      400: "#91d1ff",
      300: "#b3e6ff",
      200: "#d9f1ff",
      100: "#fcf9fb",
      50: "#fafafa",
      25: "#fafafa",
      0: "#fafafa",
    },
  },
  config,
});

export default theme;
