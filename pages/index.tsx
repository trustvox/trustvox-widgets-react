import Link from 'next/link';
import Layout from '../components/Layout';

import { products } from '../utils/products';

const Home = () => (
  <Layout>
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {products.map(product => (
          <div className="column is-3">
            <div className="card">
              <div className="card-content">
                <p className="title">{product.title}</p>
                <div className="content">
                  <b>storeId: </b> {product.storeId}
                  <br />
                  <b>productId: </b> {product.productId}
                  <br />
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <Link href="/[id]" as={`/${product.id}`}>
                    <a>Ir para {product.title}</a>
                  </Link>
                </p>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Home;
