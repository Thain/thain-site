import Head from 'next/head';
import content from '../frontaid.content';

import { Nav, Footer, Layout, Spacer, Divider } from "../components"

export default function Index() {
  return (
      <>
        <Head>
          <title>{content.name}</title>
        </Head>
        <div id="main-content">
          <Spacer h="10"/>
          <h4 style={{color: "var(--green)", fontWeight: "bold"}}>{content.index.name}</h4>
          <Spacer h="100"/>
          <div className="home-header">
            <div className="header-line" dangerouslySetInnerHTML={{__html: content.index.headerLine}}></div>
            {/* image goes here */}
            <div className="header-subline" dangerouslySetInnerHTML={{__html: content.index.headerSubline}}></div>
          </div>
          <Spacer h="70"/>
          <div className="green-strip">
            <Spacer h="50"/>
            <div dangerouslySetInnerHTML={{__html: content.index.greenStrip}}></div>
            <Spacer h="50"/>
          </div>

          <Footer />
        </div>
      </>
  );
}
