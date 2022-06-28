import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Switch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      aria-label="Toggle color mode"
      _hover={{
        bg: "gray.200",
        transition: "all 0.3s ease-in-out",
      }}
    />
  );
};

export default Switch;

// Light and Dark mode switch
// UNDERSTOOD
