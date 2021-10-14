import { useRouter } from 'next/router'
import SbEditable from 'storyblok-react'
import Teaser from './Teaser'
import Grid from './Grid'
import Feature from './Feature'
import Page from './Page'
import Wai from './Wai'
import Archives from './Archives'
import Archive from './Archive'

// resolve Storyblok components to Next.js components
const Components = {
  'archive': Archive,
  'archives': Archives,
  'wai': Wai,
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'page': Page,
}
 
const DynamicComponent = ({blok, stories}) => {
  const { isPreview } = useRouter()
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    // wrap with SbEditable for visual editing
    return isPreview ? (<SbEditable content={blok}><Component blok={blok} stories={stories} /></SbEditable>) : <Component blok={blok} stories={stories} />
  }
  
  // fallback if the component doesn't exist
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent
