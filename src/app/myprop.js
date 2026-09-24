// pages/blog/[slug].js
import { contentfulClient } from './contentful.js';

export async function getStaticProps({ params }) {
  const response = await contentfulClient.getEntry('productSection');

  const entry = response.items[0];

  if (!entry) {
    return { notFound: true };
  }

  return {
    props: {
      initialData: entry, // Standard CDA/CPA Entry object
    }
  };
}