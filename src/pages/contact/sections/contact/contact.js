import React, { PureComponent } from 'react';
import { LocationOn, Phone, Mail } from '@material-ui/icons';

import Page from '../../../../components/page/page';
import styles from './contact.module.scss';

export default class Form extends PureComponent {
  render() {
    return (
      <Page.Section>
        <div className={styles['contact']}>
          <h2 className={styles['header']}>
            Contact Us
          </h2>

          <div className={styles['info']}>
            <div className={styles['left']}>
              <h3 className={styles['info-title']}>
                We'd love to hear from you
              </h3>
              <p className={styles['info-content']}>
                Send us a message and we’ll get back to you as soon as possible or come and visit us.
              </p>

              <div className={styles['info-details']}>
                <div className={styles['info-details-item']}>
                  <LocationOn color='primary' /> 844@Oostewal Building, Oostewal Rd
                </div>

                <div className={styles['info-details-item']}>
                  <Phone color='primary' /> 082 079 4173
                </div>

                <div className={styles['info-details-item']}>
                  <Mail color='primary' /> carel@theboardroom4hire.co.za
                </div>
              </div>
            </div>

            <div className={styles['right']}>
              <iframe title='Location' id='location' src='https://www.google.com/maps/d/embed?mid=1MsyEWR0JQ5zJvcp5RVvzwqhGMVZFc0af' width='100%' height='100%' />
            </div>
          </div>
        </div>
      </Page.Section>
    );
  }
}
