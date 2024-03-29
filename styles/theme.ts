import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {});

export default theme;
