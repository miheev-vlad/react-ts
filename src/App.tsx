import {FC, useEffect, useState} from 'react';
import './App.css';
import Column from './components/Сolumn';

const App: FC = () => {
  const [userName, setUserName] = useState<string>(localStorage.getItem('userName')! || '');
  useEffect(() => {
    do {
      let result = window.prompt('Please enter your name');
      if (result && result !== '') {
        localStorage.setItem('userName', result);
      } else {
        window.alert('Your name is required');
      }
    } while (!localStorage.getItem('userName'))
  })
  return (
    <div className="App">
      <header>
        <h1>Online Kanban Board</h1>
      </header>
      <main>
        <Column defaultName="TODO" identifier="Column_#1"/>
        <Column defaultName="In Progress" identifier="Column_#2"/>
        <Column defaultName="Testing" identifier="Column_#3"/>
        <Column defaultName="Done" identifier="Column_#4"/>
      </main>
    </div>
  );
}

export default App;
