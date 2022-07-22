import { Container, Header, ListContainer } from './styles';
import arrowSvg from '../../assets/icons/arrow.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>

        <a href="#01">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            {' '}
            <img src={arrowSvg} alt="seta azul para cima" height={20} />
          </button>
        </header>
      </ListContainer>
    </Container>
  );
}
