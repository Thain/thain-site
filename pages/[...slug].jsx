import Head from 'next/head';
import content from '../frontaid.content.json';
import { Layout, Nav, Footer, Spacer } from "../components"

export default function Page({ page }) {
  return (
      <>
        <Head>
          <title>{page.name} | {content.name}</title>
        </Head>
        <h1>{page.name}</h1>
        <div dangerouslySetInnerHTML={{__html: page.content}}></div>

        <div id="home-content">
          {/*<Seo seo={homepage.attributes.seo} />*/}
          <div className="home-head">
            <Nav seo={{title:"Home", desc:""}} isBlack={false} active="home" />
              <div className="reg-w">
                <h1>A creative agency <br/> for <em className="dorange">social change.</em></h1>
                <Spacer h="30px" />
                <h5>Mobilizing people to create a just and livable future.</h5>
              </div>
              <Spacer h="140px" />
            </div>

        </div>
        <Footer />
      </>
  );
}

export async function getStaticPaths() {
  const paths = content.pages.map(page => {
    const slug = page.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: false };
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.pages.find(page => page.path === currentPath) || {notfound: true};
  return {props: {page}};
}
