import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class ScrollToTop extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return null
  }
}
