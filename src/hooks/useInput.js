import { useState } from 'react';
import PropTypes from 'prop-types';

function useInput({ type, s }) {
  const [value, setValue] = useState('');
  const input = (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      type={type}
      className={s.input}
    />
  );
  return [value, input];
}

useInput.propTypes = {
  type: PropTypes.string,
  s: PropTypes.object,
};

export default useInput;
