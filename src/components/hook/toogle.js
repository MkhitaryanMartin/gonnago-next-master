import { useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  const setToggle = (value) => {
    setState(value);
  };

  return [state, toggle, setToggle];
}

export default useToggle;
