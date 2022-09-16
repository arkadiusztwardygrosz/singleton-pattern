import styled from 'styled-components';
import GlobalStyle from '../globalStyles';
import { BigTitle } from './Components/Title/Title';
import Page1 from './Views/Page1';
import Page2 from './Views/Page2';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BigTitle>Singleton Pattern</BigTitle>
        <Content>
          <Page1 />
          <Page2 />
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vw;
`;

const Content = styled.div`
  display: flex;
  gap: 10vw;
`;
