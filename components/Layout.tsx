import PropTypes from 'prop-types';
import Header from './Header';

import '../node_modules/bulma/bulma.sass';

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
