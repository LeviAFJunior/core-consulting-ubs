import { Container } from "./styled";

export default function Footer() {
  return (
    <Container>
      <footer className="br-footer">
        <span className="br-divider my-3"></span>
        <div className="container-lg">
          <div className="info">
            <div className="text-down-01 text-medium pb-3">Texto destinado a exibição de informações relacionadas à&nbsp;<strong>licença de uso.</strong></div>
          </div>
        </div>
      </footer>
    </Container>
  );
}