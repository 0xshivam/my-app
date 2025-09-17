import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

export function initializeStoryblok() {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin], // Required for API calls
    apiOptions: {
      region: "eu", // Change only if your space is in the US or AP region
    },
  });
}
