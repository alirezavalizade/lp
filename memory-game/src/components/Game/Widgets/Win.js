import React, { useEffect, Fragment } from 'react';
import { useGame } from '../../../hooks';
import { Title, Button, Emoji } from '../../App/ui';

const Win = (props) => {
    const { setWin } = useGame();

    useEffect(() => {
        return () => {
            setWin(false);
        };
    // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Title 
                s={80}
                f="fancy"
                animate={{
                    scale: [1, 1.2, 1]
                }}
            >
                <Emoji e="😍" /> Congratulations! You Win. <Emoji e="😍" />
            </Title>
            <Button f="fancy" {...props}>
                Back to menu
            </Button>
        </Fragment>
    );
};

export default Win;