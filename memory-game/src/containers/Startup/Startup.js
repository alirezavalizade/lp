import React, { useMemo, useCallback, useState } from 'react';
import { useGame } from '../../hooks';
import { Box } from '../../components/App/Box';
import { PlayerInfoForm, Menu, GameNumberSelector, GameConfig } from '../../components/Settings/Widgets';


const Settings = (props) => {
    const [active, setActive] = useState('info');
    const { setPlayerName, playerName, setCardNumbers } = useGame();
    
    const onSubmitUserInfo = useCallback((value) => {
        setPlayerName(value);
        setActive('menu');
    }, [setPlayerName]);
    
    const onStart = useCallback(() => {
        setActive('numberSelector');
    }, []);

    const onSelectSettings = useCallback(() => {
        setActive('config');
    }, []);
    
    const onSelectCardNumbers = useCallback((number) => {
        setCardNumbers(number);
        props.onConfirm();
    }, [props, setCardNumbers]);
    
    const flow = useMemo(() => {
        return {
            info: <PlayerInfoForm onSubmit={onSubmitUserInfo} initialValue={playerName} />, 
            menu: <Menu onConfirm={[onStart, onSelectSettings]} />, 
            config: <GameConfig onConfirm={() => setActive('menu')} />,
            numberSelector: <GameNumberSelector onConfirm={onSelectCardNumbers} />
        };
    }, [onSubmitUserInfo, playerName, onStart, onSelectCardNumbers, onSelectSettings]);
    
    return (
        <Box
            center
        >
            {flow[active]}
        </Box>
    );
};

export default Settings;