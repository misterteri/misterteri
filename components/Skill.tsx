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
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.300"
        mr={2}
        mb={2}
        _hover={{
          borderColor: "gray.500",
          boxShadow: "0 0 0 1px gray.500",
          cursor: "pointer",
        }}
      >
        <Icon w={12} h={12}>
          {icon}
        </Icon>
        <Text fontSize="md">{name}</Text>
      </Box>
    </Tooltip>
  );
}
