import styled from 'styled-components';
import Header from './pages/Header';
import Content from './pages/Content/Content';

const Wrapper = styled.div`
  padding: 20px 10px;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
}

export default App;
