import React, { Fragment, useEffect } from 'react';
import { useGame } from '../../../hooks';
import { Title, Button, Emoji } from '../../App/ui';

const Lose = (props) => {
    const { setLose } = useGame();

    
    useEffect(() => {
        return () => {
            setLose(false);
        };
    // eslint-disable-next-line
    }, []);
    
    return (
        <Fragment>
            <Title 
                s={80} f="fancy"
                animate={{
                    scale: [1, 1.2, 1]
                }}
            >
                <Emoji e="😢" /> You lose <Emoji e="😢" />
            </Title>
            <Button f="fancy" {...props}>
                Try again
            </Button>
        </Fragment>
    );
};

export default Lose;