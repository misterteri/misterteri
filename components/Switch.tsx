import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Switch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Button variant="ghost" onClick={toggleColorMode}></Button>;
};

export default Switch;

// Light and Dark mode switch
// UNDERSTOOD
