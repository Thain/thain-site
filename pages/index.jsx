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
            <div className="landing-text">
              <h1 style={{fontWeight: "normal"}}>Hi, I'm Liam. <br/>This will be my website (soon).</h1>
              <h3>But it's under construction for now! <br/>See you later :-)
              </h3>
            </div>
          </div>
          {/* green arrow goes here */}
          <Spacer h="70"/>

          <div className="triple-icon">
            <div>
              <svg width="77" height="100" viewBox="0 0 77 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.76 99.28C58.3467 99.28 55.6587 98.6826 53.696 97.488C51.8187 96.2933 50.4534 94.6293 49.6 92.496C48.7467 90.3626 48.1494 87.888 47.808 85.072L46.272 70.608C46.1014 68.9013 45.888 67.1946 45.632 65.488C45.4614 63.696 45.2907 61.904 45.12 60.112C45.0347 58.2346 44.9067 56.4 44.736 54.608C44.6507 52.7306 44.608 50.896 44.608 49.104H44.224C42.7734 52.8586 41.3227 56.3146 39.872 59.472C38.4214 62.544 36.7147 66.128 34.752 70.224L21.696 98H0.832031L39.488 28.624L38.976 24.528C38.464 20.5173 37.056 18 34.752 16.976C32.448 15.952 29.632 15.44 26.304 15.44C24.8534 15.44 23.488 15.5253 22.208 15.696C21.0134 15.8666 19.9894 16.0373 19.136 16.208L22.336 1.10396C23.1894 0.933289 24.128 0.762622 25.152 0.591957C26.2614 0.421293 27.456 0.293292 28.736 0.207954C30.016 0.122622 31.3814 0.0799561 32.832 0.0799561C37.696 0.0799561 41.664 0.634623 44.736 1.74396C47.808 2.85329 50.1974 4.81596 51.904 7.63196C53.6107 10.448 54.8907 14.4586 55.744 19.664L63.936 70.608C64.5334 74.1066 65.1734 76.7946 65.856 78.672C66.624 80.464 67.4774 81.7013 68.416 82.384C69.44 82.9813 70.5494 83.28 71.744 83.28C72.6827 83.28 73.4507 83.2373 74.048 83.152C74.7307 82.9813 75.456 82.8106 76.224 82.64L73.152 97.36C72.384 97.7013 71.2747 98 69.824 98.256C68.4587 98.5973 67.0507 98.8533 65.6 99.024C64.1494 99.1946 62.8694 99.28 61.76 99.28Z" fill="var(--green)"/>
              </svg>
            </div>
            <div>
              <svg width="171" height="83" viewBox="0 0 171 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.7007 71.6011L0.941406 47.0063V38.9766L56.7007 11.125V24.6016L18.2925 42.4019L56.7007 58.1807V71.6011Z" fill="var(--green)"/>
                <path d="M108.754 0.905273L78.1509 83H62.5967L93.1997 0.905273H108.754Z" fill="var(--green)"/>
                <path d="M114.257 58.1807L152.665 42.4019L114.257 24.6016V11.125L170.016 38.9766V47.0063L114.257 71.6011V58.1807Z" fill="var(--green)"/>
              </svg>
            </div>
            <div>
              <svg width="97" height="22" viewBox="0 0 97 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1543 21.8975C6.55729 21.8975 4.01823 20.9665 2.53711 19.1045C1.05599 17.2425 0.31543 15.1689 0.31543 12.8838C0.31543 9.75228 1.28874 6.87467 3.23535 4.25098C5.18197 1.62728 8.52506 0.31543 13.2646 0.31543C16.1423 0.31543 18.4486 1.11947 20.1836 2.72754C21.9186 4.33561 22.7861 6.59961 22.7861 9.51953C22.7861 13.1165 21.6436 16.0788 19.3584 18.4062C17.0732 20.7337 14.0052 21.8975 10.1543 21.8975Z" fill="var(--green)"/>
                <path d="M47.2246 21.8975C43.6276 21.8975 41.0885 20.9665 39.6074 19.1045C38.1263 17.2425 37.3857 15.1689 37.3857 12.8838C37.3857 9.75228 38.359 6.87467 40.3057 4.25098C42.2523 1.62728 45.5954 0.31543 50.335 0.31543C53.2126 0.31543 55.5189 1.11947 57.2539 2.72754C58.9889 4.33561 59.8564 6.59961 59.8564 9.51953C59.8564 13.1165 58.7139 16.0788 56.4287 18.4062C54.1436 20.7337 51.0755 21.8975 47.2246 21.8975Z"   fill="var(--green)"/>
                <path d="M84.2949 21.8975C80.6979 21.8975 78.1589 20.9665 76.6777 19.1045C75.1966 17.2425 74.4561 15.1689 74.4561 12.8838C74.4561 9.75228 75.4294 6.87467 77.376 4.25098C79.3226 1.62728 82.6657 0.31543 87.4053 0.31543C90.2829 0.31543 92.5892 1.11947 94.3242 2.72754C96.0592 4.33561 96.9268 6.59961 96.9268 9.51953C96.9268 13.1165 95.7842 16.0788 93.499 18.4062C91.2139 20.7337 88.1458 21.8975 84.2949 21.8975Z"   fill="var(--green)"/>
              </svg>
            </div>
          </div>

          <Spacer h="130"/>

        </div>
        <Footer />
      </>
  );
}
