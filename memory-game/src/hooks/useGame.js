import { useContext } from 'react';
import { GameContext } from '../contexts';

const useGame = () => useContext(GameContext);

export default useGame;
