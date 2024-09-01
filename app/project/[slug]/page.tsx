import { draftMode } from "next/headers";

import MoreStories from "../../components/more-stories";
import Date from "../../components/date";
import CoverImage from "../../components/cover-image";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-6 xl:px-16 pt-[9rem] max-sm:pt-[5rem]">
      <article className="prose prose-slate max-w-none">
        <h1 className="mb-8 text-2xl font-bold leading-tight tracking-tighter md:leading-none lg:text-4xl">
          {post.title}
        </h1>

        <div className="mb-4 sm:mx-0 md:mb-8">
          <CoverImage title={post.title} url={post.coverImage.url} />
        </div>

        <div className="mb-6">
          <Date dateString={post.date} />
        </div>

        <div className="prose-slate max-sm:prose md:prose-xl">
          <Markdown content={post.content} />
        </div>
      </article>

      <hr className="border-accent-2 mt-12 mb-12" />

      <MoreStories morePosts={morePosts} />
    </div>
  );
}
