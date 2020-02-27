import React, { PureComponent } from 'react';

import Page from '../../components/page/page';

import Value from './sections/value/value';
import Benefit from './sections/benefit/benefit';
import Venue from './sections/venue/venue';
import Features from './sections/features/features';

import CTA from './sections/cta/cta';

export default class Home extends PureComponent {
  render() {
    return (
      <Page
        title='Home | The Boardroom 4 Hire'
      >
        <Value />
        <Benefit />
        <Venue />
        <Features />
        <CTA />
      </Page>
    );
  }
}
