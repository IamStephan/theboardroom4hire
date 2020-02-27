import React, { PureComponent } from 'react';
import Page from '../../../../components/page/page';

import styles from './features.module.scss';

export default class Features extends PureComponent {
  render() {
    return (
      <Page.Section>
        <div className={styles['features-container']}>
          <h2 className={styles['header']}>
            Have top class discussions
          </h2>
          
          <div className={styles['features']}>
            <div className={styles['features-item-container']}>
              <div className={styles['features-item']}>
                <img alt='Integrated technology' src={require('../../../../static/svg/tech.svg')} className={styles['features-item-img']} />

                <h3 className={styles['features-item-title']}>
                  Integrated technology
                </h3>

                <p className={styles['features-item-content']}>
                  You can connect your devices to our 65" LED TV using Apple TV or Chromcast. Wireless is the future and we embrace it.
                </p>
              </div>
            </div>

            <div className={styles['features-item-container']}>
              <div className={styles['features-item']}>
                <img alt='Comfortable setting' src={require('../../../../static/svg/setting.svg')} className={styles['features-item-img']} />

                <h3 className={styles['features-item-title']}>
                  Comfortable setting
                </h3>

                <p className={styles['features-item-content']}>
                  Not just do we offer first-class furniture but we also allow you to configure the seating to your liking.
                </p>
              </div>
            </div>

            <div className={styles['features-item-container']}>
              <div className={styles['features-item']}>
                <img alt='Catering' src={require('../../../../static/svg/catering.svg')} className={styles['features-item-img']} />

                <h3 className={styles['features-item-title']}>
                  Catering
                </h3>

                <p className={styles['features-item-content']}>
                  With various catering options and on-demand brewery you can be assured you'll never go hungry.
                </p>
              </div>
            </div>

            <div className={styles['features-item-container']}>
              <div className={styles['features-item']}>
                <img alt='On-site resources' src={require('../../../../static/svg/resources.svg')} className={styles['features-item-img']} />

                <h3 className={styles['features-item-title']}>
                  On-site resources
                </h3>

                <p className={styles['features-item-content']}>
                  We provide you with whiteboard markers, that way you can scribble away with creativity.
                </p>
              </div>
            </div>

            <div className={styles['features-item-container']}>
              <div className={styles['features-item']}>
                <img alt='Run by professionals' src={require('../../../../static/svg/pros.svg')} className={styles['features-item-img']} />

                <h3 className={styles['features-item-title']}>
                  Run by professionals
                </h3>

                <p className={styles['features-item-content']}>
                  Friendly, professional staff will always be available for your assistance.
                </p>
              </div>
            </div>

            <div className={styles['features-item-container']}>
              <div className={styles['features-item']}>
                <img alt='Safe environment' src={require('../../../../static/svg/safe.svg')} className={styles['features-item-img']} />

                <h3 className={styles['features-item-title']}>
                  Safe environment
                </h3>

                <p className={styles['features-item-content']}>
                  Safe, walled environment providing a secure and pleasant area for discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Page.Section>
    );
  }
}
