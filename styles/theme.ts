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
    styles: {
      global: {
        body: {
          backgroundColor: "#0C0E13",
          primaryColor: "#9FADC6",
          secondaryColor: "#394760",
          tertiaryColor: "#60759F",
          lightBackgroundColor: "#FFFFFF",
          lightprimaryColor: "#212B43",
          lightsecondaryColor: "#65CFE6",
          lighttertiaryColor: "#DDEFF3",
        },
      },
    },
  },
  config
);

export default theme;
