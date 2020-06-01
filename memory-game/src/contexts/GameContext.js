// @flow
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { usePersistedState } from '../hooks';
import { STORAGE } from '../helpers/constants';
import { isWin } from '../helpers';

export const GameContext = React.createContext();

export const GameProvider = ({ children }) => {
  const [playerName, setPlayerName] = usePersistedState(STORAGE.GAME.PLAYER.NAME, '');
  const [selectedConfig, setDifficultyLevel] = usePersistedState(STORAGE.GAME.PLAYER.LEVEL, 'normal');
  const [winType, setWinType] = usePersistedState(STORAGE.GAME.PLAYER.WIN_TYPE, 'asc');
  const [started, setStarted] = useState(false);
  const [cardNumbers, setCardNumbers] = useState(8);
  const [triedNumbers, setTriedNumbers] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);

  const [selectedItems, selectedItemsAction] = useState(() => []);

  const getIndexOfSelectedItem = useCallback((hiddenNumber) => {
    return selectedItems.findIndex(item => {
        return item.hiddenNumber === hiddenNumber;
    });
}, [selectedItems]);

  const config = useMemo(() => {
    return STORAGE.GAME.CONFIG[selectedConfig.toUpperCase()];
  }, [selectedConfig]);

  const selectItem = useCallback((newState) => {
    if (!started) {
      return;
    }
    if ((getIndexOfSelectedItem(newState.hiddenNumber) + 1)) {
      return selectedItemsAction(state => {
        return state.filter(item => newState.hiddenNumber !== item.hiddenNumber);
      });
    }
    selectedItemsAction(state => [...state, newState]);
  }, [selectedItemsAction, getIndexOfSelectedItem, started]);
  
  const clearItems = () => {
    selectedItemsAction([]);
  };
  
  const finishGame = useCallback(() => {
    const winned = isWin(selectedItems, winType);
    if (winned) {
      setStarted(false);
      setWin(true);
      // show congrats
    } else {
      if ((config.maxAllowedTryNumbers - triedNumbers) !== 1) {
        clearItems();
        setTriedNumbers(v => v + 1);
      } else {
        setStarted(false);
        setLose(true);
      }
    }
  }, [selectedItems, config, triedNumbers, setTriedNumbers, winType]);

  useEffect(() => {
    if (started) {
      clearItems();
    }
  }, [started]);

  useEffect(() => {
    if (!selectedItems.length) {
      return;
    }
    if (selectedItems.length === cardNumbers) {
      finishGame();
    }
    
  }, [finishGame, selectedItems.length, cardNumbers]);
        
  return (
    <GameContext.Provider
      value={{
        // state
        playerName,
        cardNumbers,
        started,
        config,
        triedNumbers,
        lose,
        win,
        selectedItems,
        selectedConfig,
        getIndexOfSelectedItem,
        winType,
        
        // actions
        setPlayerName,
        setDifficultyLevel,
        setCardNumbers,
        setStarted,
        finishGame,
        clearItems,
        setTriedNumbers,
        setLose,
        setWin,
        selectItem,
        setWinType
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
