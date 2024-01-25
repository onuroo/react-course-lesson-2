import { useEffect, useRef } from 'react'
import './App.css';

import ListComponent from './components/list';
import InputsComponent from './components/inputs';

function App() {
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.onChangeState('text', 'varsayılan değer');
  }, []);

  return (
    <>
      <InputsComponent ref={inputRef} listRef={listRef} />
      <ListComponent ref={listRef} />
    </>
  );
}

export default App
