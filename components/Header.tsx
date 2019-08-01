import Link from 'next/link';

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
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Produtos</a>

          <div className="navbar-dropdown">
            <Link href="/">
              <a className="navbar-item">Produto 1</a>
            </Link>
          </div>
        </div>

        <Link href="/">
          <a className="navbar-item">Produto 1</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
