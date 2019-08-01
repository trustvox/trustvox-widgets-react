import Link from 'next/link';
import { products } from '../utils/products';

const categories = products.map(product => product.category).filter(category => category)
const uniqueCategories = Array.from(new Set(categories))

const fromCategory = (products, category: string | null) => {
  return products.filter(product => product.category === category)
}

const linksFromCategory = (products, category) => (
  fromCategory(products, category).map(product => (
    <Link href="/[id]" as={`/${product.id}`} key={product.id}>
      <a className="navbar-item">{ product.title }</a>
    </Link>
  ))
)

const Header = () => (
  <nav
    className="navbar is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link href="/">
        <a className="navbar-item">
          <img
            src="https://site.trustvox.com.br/wp-content/themes/trustvox/images/logo_colorida.png"
            width="112"
            height="28"
          />
        </a>
      </Link>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-start">
      <Link href="/about">
        <a className="navbar-item">Sobre</a>
      </Link>
    </div>

    <div id="navbar" className="navbar-end">
      <div className="navbar-end">
        {uniqueCategories.map(category => (
          <div className="navbar-item has-dropdown is-hoverable" key={category}>
            <a className="navbar-link">{ category }</a>

            <div className="navbar-dropdown">
             {linksFromCategory(products, category)}
            </div>
          </div>
        ))}

        {linksFromCategory(products, null)}
      </div>
    </div>
  </nav>
);

export default Header;
