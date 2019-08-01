import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <div v-if="product">
      <h2 className="title is-2">Product 1</h2>
    </div>
  </Layout>
);

export default Home;
