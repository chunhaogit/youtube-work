import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
const Page = styled.li`
  margin: 20px 6px;

  width: 16px;
  height: 16px;

  background-color: ${(props) => props.active && '#ec5c5d'};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border-radius: 8px;

  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  font-size: 12px;
  &:hover {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    color: #fff;
    background-color: #ec5c5d;
  }
`;

const Pagnation = (props) => {
  const { page, pageArr, handleClick } = props;
  return (
    <Wrapper>
      {pageArr.map((i) => {
        const active = page === i;
        return (
          <Page key={i} onClick={() => handleClick(i)} active={active}>
            {i}
          </Page>
        );
      })}
    </Wrapper>
  );
};

export default Pagnation;
