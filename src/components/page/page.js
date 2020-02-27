import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import styles from './page.module.scss';

class PageSection extends PureComponent {
  render() {
    return (
      <section className={styles['section']}>
        {this.props.children}
      </section>
    )
  }
}

export default class Page extends PureComponent {
  static Section = PageSection

  render() {
    return (
      <Fragment>
        <Helmet>
          <meta name='keywords' content={this.props.keywords ? this.props.keywords.join(', ') : ''} />
          <meta name='description' content={this.props.description} />
          <title>
            {this.props.title}
          </title>
        </Helmet>

        <div className={styles['page']}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
