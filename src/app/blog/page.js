import { getStoryblokApi } from "@storyblok/react/rsc";
import Link from "next/link";

export default async function BlogList() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "blog", // Only fetch blogs
    version: "draft",
  });

  const blogs = data.stories;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog List</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.uuid} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{blog.name}</h2>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
