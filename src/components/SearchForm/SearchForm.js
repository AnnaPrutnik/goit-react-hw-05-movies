import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useInput({ type: 'text', s });
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickSearch = e => {
    e.preventDefault();
    onSubmit(query);
    navigate(`${location.pathname}?query=${query}`);
  };

  return (
    <form className={s.form}>
      {setQuery}
      <button type="submit" onClick={handleClickSearch} className={s.btn}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
