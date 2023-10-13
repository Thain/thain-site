import Head from 'next/head';
import content from '../frontaid.content';

import Me from "../assets/imgs/me.jpg";

import { Nav, Footer, Layout, Spacer } from "../components"

export default function Index() {
  return (
      <>
        <Head>
          <title>{content.name}</title>
        </Head>
        <Nav seo={{title:"About", desc:""}}/>
        <div id="main-content">
          <Spacer h="30"/>
          <div className="landing-con">
            {/* <div className="landing-img" dangerouslySetInnerHTML={{__html: content.index.headerLine}}></div>*/}
            <div className="landing-img">
              <img src={Me.src} />
            </div>
            <div className="landing-text">
              <h1 style={{fontWeight: "normal"}}>Hi, I'm Liam.</h1>
              <h3>a <b>mathematical logician</b> <br/>and <b>programmer</b></h3>
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

        <h2 style={{color: "var(--green)", textAlign: "center"}}><b>About me</b></h2>
          <Spacer h="50"/>
          <div className="triple-line">
            <div className="triple-icon">
              <svg width="77" height="100" viewBox="0 0 77 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.76 99.28C58.3467 99.28 55.6587 98.6826 53.696 97.488C51.8187 96.2933 50.4534 94.6293 49.6 92.496C48.7467 90.3626 48.1494 87.888 47.808 85.072L46.272 70.608C46.1014 68.9013 45.888 67.1946 45.632 65.488C45.4614 63.696 45.2907 61.904 45.12 60.112C45.0347 58.2346 44.9067 56.4 44.736 54.608C44.6507 52.7306 44.608 50.896 44.608 49.104H44.224C42.7734 52.8586 41.3227 56.3146 39.872 59.472C38.4214 62.544 36.7147 66.128 34.752 70.224L21.696 98H0.832031L39.488 28.624L38.976 24.528C38.464 20.5173 37.056 18 34.752 16.976C32.448 15.952 29.632 15.44 26.304 15.44C24.8534 15.44 23.488 15.5253 22.208 15.696C21.0134 15.8666 19.9894 16.0373 19.136 16.208L22.336 1.10396C23.1894 0.933289 24.128 0.762622 25.152 0.591957C26.2614 0.421293 27.456 0.293292 28.736 0.207954C30.016 0.122622 31.3814 0.0799561 32.832 0.0799561C37.696 0.0799561 41.664 0.634623 44.736 1.74396C47.808 2.85329 50.1974 4.81596 51.904 7.63196C53.6107 10.448 54.8907 14.4586 55.744 19.664L63.936 70.608C64.5334 74.1066 65.1734 76.7946 65.856 78.672C66.624 80.464 67.4774 81.7013 68.416 82.384C69.44 82.9813 70.5494 83.28 71.744 83.28C72.6827 83.28 73.4507 83.2373 74.048 83.152C74.7307 82.9813 75.456 82.8106 76.224 82.64L73.152 97.36C72.384 97.7013 71.2747 98 69.824 98.256C68.4587 98.5973 67.0507 98.8533 65.6 99.024C64.1494 99.1946 62.8694 99.28 61.76 99.28Z" fill="var(--violet)"/>
              </svg>
            </div>
            <div className="triple-text">
              <p>Working on my <a href="https://msclogic.illc.uva.nl/programme/mol/">Master of Logic</a> at the University of Amsterdam,<br/>
                 with a deep interest in <b>constructive mathematics.</b>
              </p>
              <p class="arrow-link green"><a>my math homepage</a></p>
            </div>
            <div className="triple-icon">
              <svg width="171" height="83" viewBox="0 0 171 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.7007 71.6011L0.941406 47.0063V38.9766L56.7007 11.125V24.6016L18.2925 42.4019L56.7007 58.1807V71.6011Z" fill="var(--violet)"/>
                <path d="M108.754 0.905273L78.1509 83H62.5967L93.1997 0.905273H108.754Z" fill="var(--violet)"/>
                <path d="M114.257 58.1807L152.665 42.4019L114.257 24.6016V11.125L170.016 38.9766V47.0063L114.257 71.6011V58.1807Z" fill="var(--violet)"/>
              </svg>
            </div>
            <div className="triple-text">
              <p>I co-founded <a href="https://mymediacreative.org/">My Media Creative</a>, a media organization<br/>
                for social good, where I headed <b>web development.</b>
              </p>
              <p class="arrow-link green"><a>my web dev homepage</a></p>
            </div>
            <div className="triple-icon"></div>
            <div className="triple-text">
              <p>You can read about my many other interests over on <b>my blog.</b><br/>
                Things like <a>teaching math</a>, <a>tabletop RPGs</a>, <a>music</a>, and <a>Emacs</a>.
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
