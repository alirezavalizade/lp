import styled from 'styled-components';
import { motion } from 'framer-motion';

const ScrollerKit = styled(motion.div)`
    border-right: 0.25rem solid transparent;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    width: 100%;

    &:hover {
    &::-webkit-scrollbar-thumb {
        background: rgba(209, 210, 211, 0.52) !important;
        box-shadow: inset 0 -2px, inset 0 -3px, inset 0 2px, inset 0 3px !important;
        min-height: 36px !important;
    }
    }

    &::-webkit-scrollbar-corner {
        background-color: transparent !important;
        position: absolute !important;
        -webkit-appearance: none;
        width: 8px;
    }

    &::-webkit-scrollbar {
        position: absolute !important;
        -webkit-appearance: none;
        width: 8px;
    }

    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box !important;
        border-radius: 4px !important;
        color: transparent !important;
    }
`;

export default ScrollerKit;
