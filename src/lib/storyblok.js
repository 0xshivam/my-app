// lib/storyblok.js
import StoryblokClient from "storyblok-js-client";

const storyblokApi = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default storyblokApi;