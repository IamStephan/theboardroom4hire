import React, { PureComponent } from 'react';
import { GuardSpinner } from 'react-spinners-kit';
import { Button } from '@material-ui/core';

import globals from '../../utils/globals.scss';
import styles from './pageLoader.module.scss';

export default class Loader extends PureComponent {
  render() {
    if (this.props.error){
      return (
        <div className={styles['loader']}>
          <h2 className={styles['error-message']}>
            Whoops, SOmething went wrong... 
          </h2>
          <Button variant='contained' color='primary' onClick={this.props.retry}>
            Retry
          </Button>
        </div>
      )
    } else if(this.props.timedOut) {
      return (
        <div className={styles['loader']}>
          <h2 className={styles['error-message']}>
            Seems like its taking a bit long...
          </h2>
          <Button variant='contained' color='primary' onClick={this.props.retry}>
            Retry
          </Button>
        </div>
      )
    } else if(this.props.pastDelay) {
      return (
        <div className={styles['loader']}>
          <GuardSpinner frontColor={globals.primary} backColor={globals.dark} />
        </div>
      )
    } else {
      return null;
    }
  }
}
