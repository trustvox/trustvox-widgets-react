import PropTypes from 'prop-types';
import Header from './Header';

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
