import React, { PureComponent } from 'react';

import Page from '../../components/page/page';

import Contact from './sections/contact/contact';
import FAQ from './sections/faq/faq';

export default class Home extends PureComponent {
  render() {
    return (
      <Page
        title='Contact | The Boardroom 4 Hire'
      >
        <Contact />
        <FAQ />
      </Page>
    );
  }
}
