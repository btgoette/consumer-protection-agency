// React Components
import React from 'react'
import App from 'next/app'
import { SSRProvider } from '@react-aria/ssr'
import AOS from 'aos'
import { addBackToTop } from 'vanilla-back-to-top'
import 'scss/styles.scss'

// Custom Components 
import PageLayout from 'components/layout/PageLayout'

export default class MyApp extends App {

  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    AOS.init();
    addBackToTop({
      diameter: 56,
      backgroundColor: '#ba2519',
      textColor: '#fff'
    });
    window.scrollTo(0, 0)
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <SSRProvider>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </SSRProvider>
      </React.Fragment>
    )
  }
}
