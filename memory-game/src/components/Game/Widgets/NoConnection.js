import React from 'react';
// import { useGame } from '../../../hooks';
import Box from '../../App/Box/Box';
import { Title, Emoji } from '../../App/ui';

const NoConnection = (props) => {
    
    return (
        <Box center>
            <Title 
                s={80} f="fancy"
                animate={{
                    scale: [1, 1.2, 1]
                }}
            >
                <Emoji e="😢" /> NoConnection <Emoji e="😢" />
            </Title>
        </Box>
    );
};

export default NoConnection;