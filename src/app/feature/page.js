import storyblokApi from '@/lib/storyblok';
import Feature from '../components/featureblock';

export default async function featureBlock() {
  const { data } = await storyblokApi.get("cdn/stories/feature", {});
  
  return (
    <main>
      <Feature data={data.story.content} />
    </main>
  );
}