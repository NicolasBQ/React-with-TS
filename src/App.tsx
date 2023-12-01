import React from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';

const INITIAL_STATE = [    {
  nick: 'Nicolas',
  subMonths: 2,
  avatar: 'https://i.pravatar.cc/150?u=nicolas',
  description: 'Something about nicolas subscription'
},
{
  nick: 'Michael',
  subMonths: 7,
  avatar: 'https://i.pravatar.cc/150?u=michael'
}]

interface AppState {
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = React.useState<AppState['subs']>(INITIAL_STATE);

  
  const handleNewSub = (newSub: Sub):void => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="App">
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
