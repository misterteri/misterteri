import fs from "fs";
import path from "path";
import { Heading, Text } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { DateTime } from "luxon";

// components
import Layout from "../../components/Layout";
import MDXComponents from "../../components/MDXComponent";
import Authors from "../../components/Authors";

// interface
import type { MdxPage } from "../../lib/types";

// remark plugins
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from "@fec/remark-a11y-emoji";
import remarkUnwrapImages from "remark-unwrap-images";

// rehype pluings
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypePrismPlus from "rehype-prism-plus";
import rehypePrismDiff from "rehype-prism-diff";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default function Portfolio({ mdxSource }: MdxPage) {
  return (
    <Layout>
      <Text fontSize="sm" color="gray.500">
        {DateTime.fromISO(mdxSource.frontmatter.date).toFormat("LLLL dd, yyyy")}{" "}
        - {mdxSource.frontmatter.readingTime} reading
      </Text>
      <Heading as="h1" size="2xl" mt={1} mb={3}>
        {mdxSource.frontmatter.title}
      </Heading>
      <Authors authors={mdxSource.frontmatter.authors} />
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const folders = fs.readdirSync(path.join("content", "portfolios"));

  const paths = folders.map((name) => ({
    params: {
      slug: name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const source = fs.readFileSync(
    path.join("content", "portfolios", slug, "index.mdx"),
    "utf-8"
  );

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      format: "mdx",
      remarkPlugins: [remarkGfm, remarkMath, remarkUnwrapImages, remarkEmoji],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeKatex,
        rehypePrismPlus,
        rehypePrismDiff,
      ],
    },
  });

  return {
    props: {
      mdxSource,
    },
  };
};
