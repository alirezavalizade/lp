import React, { useState, useEffect } from 'react';
import { useGame } from '../../../hooks';
import { secondToHMS } from '../../../helpers';
import { Title } from '../../App/ui';
import { TimerCounter } from './elements';

let timeout;
const TimerToStart = () => {
    const { config, setStarted } = useGame();
    const [count, countDown] = useState(() => config.countDownToStartTimer);

    useEffect(() => {
        if (!config.countDownToStartTimer) {
            return;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            countDown(c => c - 1);
        }, 1000);
    }, [count, config]);

    useEffect(() => {
        if (!config.countDownToStartTimer) {
            return;
        }
        if (!count) {
            setStarted(true);
        }
    }, [config.countDownToStartTimer, setStarted, count]);
    
    useEffect(() => {
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    
    if (!config.countDownToStartTimer) {
        return null;
    }
    
    return (
        <TimerCounter>
            {secondToHMS(count)}
            <Title s={16} left={10} f="fancy">
                to Start
            </Title>
        </TimerCounter>
    );
};

export default TimerToStart;