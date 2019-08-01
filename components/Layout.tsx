import PropTypes from 'prop-types';
import Header from './Header';

import '../node_modules/bulma/bulma.sass';

const Layout = props => (
  <div>
    <Header />
    <div className="section">{props.children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
