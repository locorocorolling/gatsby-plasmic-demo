
import * as React from "react"
import {
  PlasmicComponent,
  PlasmicRootProvider,
  initPlasmicLoader,
} from "@plasmicapp/loader-gatsby";
import { graphql } from 'gatsby';

// Statically fetch the data needed to render Plasmic pages or components.
// You can pass in multiple page paths or component names.
export const query = graphql`
  query {
    plasmicComponents(componentNames: ["NumberWithCircle"])
    plasmicOptions
  }
`;

const SamplePage = ({ data }) => {
  const { plasmicComponents, plasmicOptions } = data;
  return (
    <PlasmicRootProvider
      loader={initPlasmicLoader(plasmicOptions)}
      prefetchedData={plasmicComponents}
    >
      <div style={{ height: '100vh' }}></div>
      <div style={{ height: '100vh', backgroundColor: "black", position: 'relative' }}>
        <div
          data-sal="slide-right"
          style={{ position: 'absolute', top: '100px', left: '100px' }}
        >
          <PlasmicComponent component="NumberWithCircle" componentProps={{
            number: '2'
          }} />
        </div>
      </div>

    </PlasmicRootProvider>
  )
}

export default SamplePage
