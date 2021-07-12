import {FC, useEffect, useState} from 'react';
import Board from './components/Board';
import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: FC = () => {
  const [userName, setUserName] = useState<string>(localStorage.getItem('userName')! || '');
  useEffect(() => {
    if (!localStorage.getItem('userName')) {
      do {
        let result = window.prompt('Please enter your name');
        if (result && result !== '') {
          localStorage.setItem('userName', result);
          setUserName(result);
        } else {
          window.alert('Your name is required');
        }
      } while (!localStorage.getItem('userName'))
  
    }
  })
  return (
    <>
      <GlobalStyle />
      <header>
        <Header />
      </header>
      <main>
        <Board />
      </main>
    </>
  );
}

export default App;
