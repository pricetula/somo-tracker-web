/* eslint-disable */
import React from 'react';
import Head from 'next/head';
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
          <title>Ultimate student perfomance tracking system</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default App;