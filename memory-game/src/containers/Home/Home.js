import React from 'react';
import { Title, Button } from '../../components/App/ui'
import { Box } from '../../components/App/Box';
import { Emoji } from '../../components/App/ui';

const Start = ({
    onConfirm
}) => {
    return (
        <Box center>
            <Title s={50} top="0" f="fancy">
                Welcome to memory game
            </Title>
            <Button size={20} onClick={onConfirm}>
               <Emoji e="💿" /> Load game
            </Button>
        </Box>
    );
};

export default Start;