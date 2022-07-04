import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Switch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(SunIcon, MoonIcon);
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      icon={<Icon />}
      color={"#9FADC6"}
      _hover={{
        bg: "#9FADC6",
        color: "#0C0E13",
        transition: "all 0.3s ease-in-out",
      }}
    />
  );
};

export default Switch;

// Light and Dark mode switch
// UNDERSTOOD
