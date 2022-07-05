export type MdxPage = {
    frontMatter: { [key: string]: any; };
    mdxSource: any;
};

export type Post =  {
    frontMatter: { [key: string]: any; };
    slug: string;
}

export type Views = {
    total: number;
};