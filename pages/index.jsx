import Head from 'next/head';
import content from '../frontaid.content';

import { Nav, Footer, Layout, Spacer } from "../components"

export default function Index() {
  return (
      <>
        <Head>
          <title>{content.name}</title>
        </Head>
        <Nav seo={{title:"About", desc:""}}/>
        <div id="main-content">
          <Spacer h="70"/>
          <div className="landing-con">
            {/* <div className="landing-img" dangerouslySetInnerHTML={{__html: content.index.headerLine}}></div>*/}
            <div className="landing-text">
              <h1 style={{fontWeight: "normal"}}>Hi, I'm Liam.</h1>
              <h3>a <b>mathematical logician</b> <br/>and <b>programmer;</b></h3>
              <h3>with a passion for making <br/> complex ideas <b>more accessible.</b>
              </h3>
            </div>
          </div>
          <Spacer h="170"/>
          {/* green arrow goes here */}
          <Spacer h="70"/>

          {/*
          <div className="green-strip">
            <Spacer h="50"/>
            <div dangerouslySetInnerHTML={{__html: content.index.greenStrip}}></div>
            <Spacer h="50"/>
          </div>
           */}

          <h2><b style={{color: "var(--green)"}}>About me:</b></h2>
          <Spacer h="50"/>
          <div className="triple-line">
            <div className="triple-icon"></div>
            <div className="triple-text">
              <p>Working on my <a href="https://msclogic.illc.uva.nl/programme/mol/">Master of Logic</a> at the University of Amsterdam,<br/>
                 with a deep interest in <b>constructive mathematics.</b>
              </p>
              <p class="arrow-link green"><a>my math homepage</a></p>
            </div>
            <div className="triple-icon"></div>
            <div className="triple-text">
              <p>I co-founded <a href="https://mymediacreative.org/">My Media Creative</a>, a media organization<br/>
                for social good, where I headed <b>web development.</b>
              </p>
              <p class="arrow-link green"><a>my web dev homepage</a></p>
            </div>
            <div className="triple-icon"></div>
            <div className="triple-text">
              <p>Over on <a href="/blog">my blog</a> I talk at length about all of my <b>other interests</b><br/>
                including teaching math, tabletop RPGs, music, and Emacs.
              </p>
              <p class="arrow-link green"><a>my blog homepage</a></p>
            </div>
          </div>

          <Spacer h="150"/>

        </div>
        <Footer />
      </>
  );
}
