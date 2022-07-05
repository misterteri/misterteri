import Tags from "./Tags";
import NextLink from "next/link";
import { DateTime } from "luxon";

import type { Post } from "../lib/types";
import { Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

export default function Posts({
  posts,
  type,
}: {
  posts: Post[];
  type: string;
}) {
  return (
    <>
      {posts.map((post: Post) => {
        return (
          <LinkBox
            as="article"
            p="5"
            my={5}
            borderWidth="2px"
            rounded="md"
            key={post.slug}
            borderColor="transparent"
            _hover={{
              border: "2px solid",
              borderColor: "#fc909f",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease-in-out",
              transform: "translateY(-10px)",
            }}
          >
            <Text fontSize="sm" color="gray.500">
              {DateTime.fromISO(post.frontMatter.date).toFormat(
                "LLLL dd, yyyy"
              )}{" "}
              - {post.frontMatter.readingTime} reading
              {type === "blog" ? <> •</> : <></>}
            </Text>
            <NextLink href={"/" + type + "/" + post.slug} passHref>
              <LinkOverlay>
                <Heading as="h1">{post.frontMatter.title}</Heading>
              </LinkOverlay>
            </NextLink>
            <Text as="p" my={5}>
              {post.frontMatter.description}
            </Text>
            {post.frontMatter.tags && <Tags tags={post.frontMatter.tags} />}
          </LinkBox>
        );
      })}
    </>
  );
}
