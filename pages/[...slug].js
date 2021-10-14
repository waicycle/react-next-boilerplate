import React from "react"
import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"
import Storyblok, { useStoryblok } from "../lib/storyblok"

export default function Page({ story, stories, preview }) {

  const enableBridge = true
  story = useStoryblok(story, enableBridge)

  return (
    <Layout>
      <DynamicComponent blok={story.content} stories={stories} />
      {/* <div className="text-xs text-pink-700">{JSON.stringify(stories)}</div> */}
      {/* <div className="text-xs text-green-500">{JSON.stringify(story)}</div> */}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {

  let slug = params.slug ? params.slug.join("/") : "/archives"
  let sbParams = { version: "draft" }

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  let data2 = await Storyblok.get(`cdn/stories/`, {
    "starts_with": "archives/",
    "excluding_slugs": "archives/",
    "sort_by": "content.publish_date:desc"
  })

  return {
    props: {
      story: data ? data.story : null,
      stories: data2 ? data2.data.stories : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  // get all links from Storyblok
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];
  // create a routes for every link
  Object.keys(data.links).forEach((linkKey) => {
    // do not create a route for folders or the home (index) page
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "/archives") {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    // cretes all the routes
    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
