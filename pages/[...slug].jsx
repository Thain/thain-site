import Head from 'next/head';
import content from '../frontaid.content.json';

export default function Page({ page }) {
  console.log(page.name);
  return (
      <>
        <Head>
          <title>{page.name} | {content.name}</title>
        </Head>
        <h1>{page.name}</h1>
        <div dangerouslySetInnerHTML={{__html: page.content}}></div>
      </>
  );
}

export async function getStaticPaths() {
  const paths = content.pages.map(page => {
    const slug = page.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: 'blocking'};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.pages.find(page => page.path === currentPath) || {notfound: true};
  return {props: {page}};
}
