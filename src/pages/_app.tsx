/* eslint-disable */
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Layout from 'src/components/Layout';
import 'src/style/global/index.scss';

interface AppProps {
  Component: any
  pageProps: any
}

class App extends React.Component<AppProps> {
  render() {
    const {
      Component,
      pageProps,
    } = this.props;
    return (
      <>
        <Head>
          <link
            rel="shortcut icon"
            href="/favicon.ico"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            rel="stylesheet"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <title>Ultimate student perfomance tracking system</title>
          <Script id="segment-analytics" strategy="lazyOnload">
            {`
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="h1mNT2zpsAk68581o1fnDZvChrezGqoV";;analytics.SNIPPET_VERSION="4.15.3";
              analytics.load("h1mNT2zpsAk68581o1fnDZvChrezGqoV");
              analytics.page();
              }}();
            `}
          </Script>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default App;