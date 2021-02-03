import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { fetchSearch } from '../store/actions/search';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;
  background-color: #ec5c5d;
`;

const Searchbar = styled.form`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  margin: 0 20%;
`;
const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  padding-right: 34px;

  width: 100%;
  height: 30px;
  color: #fff;
  font-size: 16px;

  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
`;

const Button = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  position: absolute;
  right: 0;

  cursor: pointer;
  width: 30px;
  height: 30px;

  background-color: transparent;
  border: none;
  outline: none;
`;

const SearchButton = styled(SearchIcon)`
  color: #fff;
`;

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [queryText, setQueryText] = useState('');

  const handleChange = (e) => setSearchText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryText(searchText);
  };

  useEffect(() => {
    dispatch(fetchSearch(queryText));
    console.log(queryText);
  }, [dispatch, queryText]);

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={searchText} />
        <Button>
          <SearchButton />
        </Button>
      </Searchbar>
    </Wrapper>
  );
};

export default Header;
