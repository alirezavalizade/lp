import React from 'react';
import { useGame, useClient } from '../../hooks';
import { Box } from '../../components/App/Box';
import { Sidebar } from '../../components';
import { Cards, Lose, Win, NoConnection } from '../../components/Game/Widgets'
import { IF } from '../../components/App/Conditional';
import { Body } from './elements';

const Game = ({ onReset }) => {
    const { lose, win } = useGame();
    const { connection } = useClient();
    
    if (!connection) {
        return <NoConnection />
    }
    
    return (
        <Box 
            initial={{ scale: .4 }}
            animate={{ scale: 1 }}
            center={lose || win}
        >
            <IF on={lose}>
                <Lose onClick={onReset} />
            </IF>
            <IF on={win}>
                <Win onClick={onReset} />
            </IF>
            <IF on={!lose && !win}>
                <Sidebar onReset={onReset} />
                <Body>
                    <Cards />
                </Body>
            </IF>
        </Box>
    );
};

export default Game;