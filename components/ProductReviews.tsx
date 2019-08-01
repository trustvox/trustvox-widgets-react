
import PropTypes from 'prop-types';

const ProductReviews = ({product}) => {
  return (
    <div>
      <div id="_sincero_widget"></div>
    </div>
  )
};

ProductReviews.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductReviews;
