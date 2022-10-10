import Link from 'next/link';
import Head from "next/head"
import React from 'react';
import content from '../frontaid.content';
import { PageTransition } from 'next-page-transitions'

import "../assets/css/style.css"
import "../assets/css/font.css"
import "../assets/css/color.css"
import "../assets/css/screen-sizes.css"
import 'jquery/dist/jquery.min.js'

export default function MyApp({Component, router, pageProps}) {
  return (
      <>
        <PageTransition timeout={450} classNames="page-transition">
          <main>
            <Component {...pageProps} key={router.route} />
          </main>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 450ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 450ms;
          }
        `}</style>
      </>
  );
}
