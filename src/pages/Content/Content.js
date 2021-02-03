import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import Pagnation from './Pagnation';
import { updatePage } from '../../store/actions/search';

const Wrapper = styled.div`
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.img.attrs((props) => ({
  src:
    'https://thomas.vanhoutte.be/miniblog/wp-content/uploads/light_blue_material_design_loading.gif',
  alt: 'loading',
}))``;

const ErrorMsg = styled.p`
  margin: 20px;
  text-align: center;
`;

const Content = () => {
  const { isFetching, result, errorMessage, page } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(result.items && result.items.slice(0, 10));
  }, [result.items]);

  const length = result.items && result.items.length / 10;
  let pageArr = [];
  for (let i = 1; i <= length; i++) {
    pageArr.push(i);
  }

  const handleClick = (i) => {
    dispatch(updatePage(i));
    setData(result.items.slice((i - 1) * 10, i * 10));
  };

  if (isFetching) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (errorMessage.length > 0) return <ErrorMsg>{errorMessage}</ErrorMsg>;

  return (
    <Wrapper>
      <CardWrapper>
        {data &&
          data.map(({ id, snippet }) => (
            <Card
              key={id.videoId}
              href={id.videoId}
              title={snippet.title}
              src={snippet.thumbnails.medium.url}
            />
          ))}
      </CardWrapper>
      <Pagnation
        page={page}
        pageArr={pageArr}
        handleClick={(i) => handleClick(i)}
      />
    </Wrapper>
  );
};

export default Content;
