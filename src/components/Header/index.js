import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <header className="br-header compact">
        <div className="container-lg">
          <div className="header-top">
            <div className="header-actions">
              <div className="header-login">
                <div className="header-sign-in">
                  {/* <button className="br-sign-in small" type="button" data-trigger="login"><span className="d-sm-inline">Entrar</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-menu">
              <div className="header-menu-trigger">
                <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="menu-compact">
                </button>
              </div>
              <div className="header-info">
                <div className="header-title">Unidades de saúde</div>
                <div className="header-subtitle">Dados detalhados</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Nav>
  );
}