import { Box, Icon, Tooltip, Text } from "@chakra-ui/react";

// pass string and <svg>
export default function Skill({
  name,
  icon,
}: {
  name: string;
  icon: JSX.Element;
}) {
  return (
    <Tooltip label={name}>
      <Box
        // align icon with text
        display="flex"
        alignItems="center"
        w="max-content"
        h="max-content"
        rounded="md"
        backgroundColor={"#1A202C"}
        mr={2}
        mt={2}
        p={1.5}
        _dark={{
          backgroundColor: "white",
        }}
      >
        <Icon w={12} h={12}>
          {icon}
        </Icon>
      </Box>
    </Tooltip>
  );
}
