import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: block;
  margin: 10px;

  width: 320px;
  &:link {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Image = styled.img`
  width: 320px;
  height: 180px;
`;
const Title = styled.h4`
  margin-top: 8px;

  color: #333;
  font-size: 14px;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Card = (props) => {
  const { href, src, title } = props;
  return (
    <Wrapper href={`https://www.youtube.com/watch?v=${href}`}>
      <Image src={src} alt={title} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Card;
