import storyblokApi from '../../lib/storyblok';
import Feature from '../components/featureblock';
export const revalidate = 0

export default async function featureBlock() {
  const { data } = await storyblokApi.get("cdn/stories/feature", {
    version: "draft"
    
  });
  
  console.log("Storyblok data:", data.story.content); 
  return (
    <main>
      <Feature data={data.story.content} />
    </main>
  );
}