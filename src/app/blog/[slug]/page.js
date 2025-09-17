import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();

  try {
    // Fetch the story by trying both folder + slug and just slug
    let data;

    // First, try full folder path: blog/slug
    try {
      const res = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
        version: "draft", // use "published" for live site
      });
      data = res.data;
    } catch (err) {
      // If that fails, try just slug
      const res = await storyblokApi.get(`cdn/stories/${slug}`, {
        version: "draft",
      });
      data = res.data;
    }

    if (!data?.story) {
      return <h1>404 - Blog Not Found</h1>;
    }

    const story = data.story;
    const contentBlocks = story.content.body || [];

    return (
      <div>
        <h1>{story.name}</h1>

        {contentBlocks.length === 0 && <p>No content available.</p>}

        {contentBlocks.map((block, index) => {
          switch (block.component) {
            case "text_block":
              return <p key={index}>{block.text}</p>;
            case "image_block":
              return <img key={index} src={block.image} alt={block.alt || ""} />;
            default:
              return <div key={index}>Unsupported block type: {block.component}</div>;
          }
        })}
      </div>
    );
  } catch (error) {
    console.error("Storyblok fetch error:", error);
    return <h1>404 - Blog Not Found</h1>;
  }
}
