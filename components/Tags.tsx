import NextLink from "next/link";
import { Button, Flex, Text } from "@chakra-ui/react";

// pass props as an object
export default function Tags({ tags }: { tags: string[] }) {
  return (
    <Flex>
      {tags.map((tag: string, index: any) => {
        return (
          <NextLink href={"/tag/" + tag} key={index} passHref>
            <Button
              mr={2}
              variant="solid"
              padding={2}
              bgColor={"#9FADC6"}
              color={"#0C0E13"}
              _hover={{
                bgColor: "#394760",
                color: "#9FADC6",
              }}
            >
              <Text>{tag}</Text>
            </Button>
          </NextLink>
        );
      })}
    </Flex>
  );
}
