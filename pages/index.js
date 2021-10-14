import React from "react"
import DynamicComponent from "../components/DynamicComponent"
import Layout from "../components/Layout"
import Storyblok, { useStoryblok } from "../lib/storyblok"

export default function Home({ story, stories, preview }) {

  const enableBridge = true
  story = useStoryblok(story, enableBridge)
  return (
    <Layout>
      <DynamicComponent blok={story.content} stories={stories} />
      {/* <div className="text-xs text-pink-700">{JSON.stringify(stories)}</div> */}
      {/* <div className="text-xs text-green-500">{JSON.stringify(story)}</div> */}
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "/archives"
  // load the published content outside of the preview mode
  let sbParams = {
    version: "published", // or 'draft'
  }
 
  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft"
    sbParams.cv = Date.now()
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
      preview
    },
    revalidate: 3600, // revalidate every hour
  }
}