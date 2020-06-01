import React, { useState, useEffect } from 'react';
import { useGame } from '../../../hooks';
import { secondToHMS } from '../../../helpers';
import { TimerCounter } from './elements';
import { Title } from '../../App/ui';

let timeout;
const Timer = () => {
    const { config, finishGame } = useGame();
    const [count, countDown] = useState(() => config.countDownToFinishTimer);

    useEffect(() => {
        if (!count) {
            return finishGame();
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            countDown(c => c - 1);
        }, 1000);
    }, [count, finishGame]);
    
    useEffect(() => {
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    
    return (
        <TimerCounter>
            {secondToHMS(count)}
            <Title s={16} left={10} f="fancy">
                to Finish
            </Title>
        </TimerCounter>
    );
};

export default Timer;