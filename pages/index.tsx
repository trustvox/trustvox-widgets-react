import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <div className="container">
      <div className="columns is-multiline is-mobile">
        <div className="column is-3">
          <div className="card">
            <div className="card-content">
              <p className="title">Product 1</p>
              <div className="content">
                <b>storeId: </b> 0000
                <br />
                <b>productId: </b> 0000
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <Link href="/1">
                  <a>Ir para Product 1</a>
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
