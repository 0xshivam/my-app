import StoryblokClient from "storyblok-js-client";

const isDev = process.env.NODE_ENV !== "production";

const storyblokApi = new StoryblokClient({
  accessToken: isDev
    ? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
    : process.env.NEXT_PUBLIC_STORYBLOK_PUBLIC_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default storyblokApi;
