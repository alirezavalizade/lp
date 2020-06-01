import React from 'react';
import styled, { css } from "styled-components";
import { motion } from 'framer-motion';
import { Vibrant } from '../ui';

const centerState = css`
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const fullScreenState = css`
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
`;

const noneFullscreen = css`
    position: relative;
    padding: 40px;
    min-width: ${p => p.size ? `${p.size}px` : 'inherit'};
    min-height: ${p => p.size ? `${p.size}px` : 'inherit'};
`;

const Component = styled(motion.div)`
    display: flex;
    border-radius: ${p => p.theme.pixels.radius}px;
    box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.11);
    z-index: 2;
    overflow: hidden;
    ${p => p.center ? centerState : null};
    ${({ full = true }) => full ? fullScreenState : noneFullscreen};
`;

const Box = ({ children, ...props }) => {

    return (
        <Component {...props}>
            <Vibrant />
            {children}
        </Component>
    );
};

export default Box;