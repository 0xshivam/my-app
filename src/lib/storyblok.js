import { apiPlugin, storyblokInit, getStoryblokApi as getApi } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu", // Change region only if your space is not in EU
  },
});

// Proper function to return API instance
export const getStoryblokApi = () => getApi();
