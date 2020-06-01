import React, { useState, useMemo, useCallback } from 'react';
import AppProviders from '../../contexts/AppProviders';
import { Layout } from './elements';
import Home from '../Home/Home';
import Game from '../Game/Game';
import Startup from '../Startup/Startup';

const AppBody = () => {
  const [active, setActive] = useState(0);
  const next = useCallback(() => {
    setActive(c => c + 1);
  }, []);
  const flow = useMemo(() => {
    return [
      <Home onConfirm={next} />, 
      <Startup onConfirm={next} />, 
      <Game onReset={() => setActive(1)} />
    ];
  }, [next]);
  
  return (
    <Layout>
      {flow[active]}
    </Layout>
  );
};

const App = () => {
  return (
    <AppProviders>
      <AppBody />
    </AppProviders>
  );
}

export default App;
