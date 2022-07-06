import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { Heading } from "@chakra-ui/react";
import type { Post } from "../lib/types";
import sortPost from "../lib/sortpost";

export default function Portfolio({
  portfolios,
}: {
  portfolios: Post[];
}): JSX.Element {
  return (
    <Layout>
      <Heading as="h2" size="md" mb={3}>
        Portfolio
      </Heading>
      <Posts posts={portfolios} type="portfolio" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // get the name of all folders in /content/portfolios
  const folders = fs.readdirSync(
    path.join(process.cwd(), "content", "portfolios")
  );

  // iterate through all the folders
  var portfolios: Post[] = folders.map((slug) => {
    const content = fs.readFileSync(
      path.join("content", "portfolios", slug, "index.mdx"),
      "utf-8"
    );
    const { data: frontMatter } = matter(content);
    return {
      frontMatter,
      slug: slug,
    };
  });

  portfolios = sortPost(portfolios);

  return {
    props: {
      portfolios,
    },
  };
};
