import React, { PureComponent } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

import Page from '../../../../components/page/page';
import styles from './faq.module.scss';

export default class FAQ extends PureComponent {
  render() {
    return (
      <Page.Section>
        <div className={styles['faq-container']}>
          <h2 className={styles['header']}>
            Frequently Asked Questions
          </h2>

          <div className={styles['faq']}>
            <ExpansionPanel expanded>
              <ExpansionPanelSummary>
                <h3 className={styles['faq-title']}>
                  What packages are available?
                </h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  We currently offer 3 packages you can choose from.

                  <ul>
                    <li>Per Hour</li>
                    <li>Half Day</li>
                    <li>Full Day</li>
                  </ul>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded>
              <ExpansionPanelSummary>
                <h3 className={styles['faq-title']}>
                  What are the costs involved?
                </h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>
                  Our prices are dynamic and personilized. Depending on the catering you will need and what package you chosse.
                  There is also the option of buying supplies on demand, like water, coffee and the board markers.
                </p>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded>
              <ExpansionPanelSummary>
                <h3 className={styles['faq-title']}>
                  Is there technology is available?
                </h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>
                  We provide you with a 65' LED TV with Apple TV and a Chromecast, depending on which you prefer.
                  You can also connect your devices wirelessly to the TV if you want to site in the back.
                  There is an old fashioned whiteboard with markers.
                </p>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded>
              <ExpansionPanelSummary>
                <h3 className={styles['faq-title']}>
                  What are the seating configurations?
                </h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <p>
                  All our furniture is movable and you can configure the seating to your liking or you can opt-in for a preset configuration.
                </p>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </Page.Section>
    );
  }
}
