import { FC, useEffect } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: FC = () => {
  useEffect(() => {
    if (!localStorage.getItem('userName')) {
      do {
        const result = window.prompt('Please enter your name');
        if (result && result !== '') {
          localStorage.setItem('userName', result);
        } else {
          window.alert('Your name is required');
        }
      } while (!localStorage.getItem('userName'));
    }
  });
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
};

export default App;
