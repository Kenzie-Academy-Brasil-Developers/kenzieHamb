import { MdSearch } from 'react-icons/md';
import { useContext, useState } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CartContext';

const SearchForm = () => {
  const { setSearch } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState('');

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch(searchValue);

    setSearchValue('');
  };

  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
