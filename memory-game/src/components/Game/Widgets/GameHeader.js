import React, { Fragment } from 'react';
import { useGame } from '../../../hooks';
import { TRANSLATION } from '../../../helpers/constants';
import { Title, Button } from '../../App/ui'
import { Header, HeaderInside } from './elements';
import { IF } from '../../App/Conditional';
import PlayerHearts from './PlayerHearts';
import Timer from './Timer';
import TimerToStart from './TimerToStart';

const { GAME: { PLAYER: { WIN_TYPE } } } = TRANSLATION;

const GameHeader = () => {
    const { started, setStarted, lose, win, winType } = useGame();

    return (
        <Header>
            <HeaderInside>
                <PlayerHearts />
                <IF
                    on={!started}
                    else={
                        <Fragment>
                            <Title 
                                s={24}
                                f="fancy"
                                right="auto" 
                                left="auto"
                                centerAbsoluteHorizantal
                            >
                                Please select cards in {WIN_TYPE[winType]} order
                            </Title>
                            <Timer />
                        </Fragment>
                    }
                >
                    <IF on={(!lose && !win)}>
                        <Title 
                            s={24}
                            f="fancy"
                            right="auto" 
                            left="auto"
                            centerAbsoluteHorizantal
                        >
                            Try to remember these numbers
                        </Title>
                        <TimerToStart />
                    </IF>
                    <Button onClick={() => setStarted(true)} left={10}>
                        Play
                    </Button>
                </IF>
            </HeaderInside>
        </Header>
    );
};

export default GameHeader;