import Link from 'next/link';
import React from 'react';
import content from '../frontaid.content';

import "../assets/css/style.css"
import "../assets/css/font.css"
import "../assets/css/color.css"
import "../assets/css/screen-sizes.css"
import 'jquery/dist/jquery.min.js'

export default function MyApp({Component, pageProps}) {
  return (
      <>
        <Head>
          {/*gtag here*/}
        </Head>

        <nav>
          <ul>
            <li><Link href="/"><a>{content.index.title}</a></Link></li>
            {content.pages.map(page =>
                <li key={page.path}>
                  <Link href="[...slug]" as={page.path}><a>{page.title}</a></Link>
                </li>,
            )}
          </ul>
        </nav>
        <main>
          <Component {...pageProps} />
        </main>
      </>
  );
}
