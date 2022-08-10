import {
  useColorMode,
  IconButton,
  Button,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import useSound from "use-sound";

export default function ColorModeSwitch({ mobile }): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound("/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });
  const handleClick = () => {
    toggleColorMode();
    colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
  };
  return (
    <Tooltip
      label={colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      aria-label="A tool tip"
    >
      {mobile ? (
        <Button
          size="sm"
          leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={handleClick}
        >
          {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      ) : (
        <IconButton
          isRound
          aria-label="Switch theme"
          variant={mobile ? "ghost" : undefined}
          icon={
            colorMode === "dark" ? (
              <Icon as={SunIcon} />
            ) : (
              <Icon as={MoonIcon} />
            )
          }
          onClick={handleClick}
        />
      )}
    </Tooltip>
  );
}
