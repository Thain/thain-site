import Head from 'next/head';
import content from '../frontaid.content';

export default function Index() {
  return (
      <>
        <Head>
          <title>{content.name}</title>
        </Head>
        <div id="main-content">
          <h4 style={{color: "var(--green)", fontWeight: "bold"}}>{content.index.name}</h4>
          <div className="header">
            <div dangerouslySetInnerHTML={{__html: content.index.headerLine}}></div>
            {/* image goes here */}
            <div dangerouslySetInnerHTML={{__html: content.index.headerSubline}}></div>
          </div>
          <div className="green-strip">
            <div dangerouslySetInnerHTML={{__html: content.index.greenStrip}}></div>
          </div>
        </div>
      </>
  );
}
