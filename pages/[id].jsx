import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProductReviews from '../components/ProductReviews';

import { getProduct } from '../utils/products';

const loadingPage = (
  <Layout>
    <div>Loading...</div>
  </Layout>
);

const Home = () => {
  const router = useRouter();
  const product = getProduct(router.query.id);

  if (!product) return loadingPage;

  return (
    <Layout>
      <div v-if="product">
        <h2 className="title is-2">{product.title}</h2>
        <ProductReviews product={product} />
      </div>
    </Layout>
  );
};

export default Home;
