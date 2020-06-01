import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isString } from '../../../../helpers';
import { centerAbsoluteHorizantal } from '../../../../theme/css';

const Title = styled(motion.h1)`
    user-select: none;
    font-size: ${p => p.s ?  `${p.s}px` : 'inherit'};
    color: ${p => p.color || '#FFF'};
    opacity: ${p => p.opacity || 1};
    font-family: ${p => p.theme.typography[p.f || 'bold']};
    margin-top: ${p => p.top ? `${p.top}px` : 'inherit'};
    margin-bottom: ${p => p.bottom ? `${p.bottom}px` : 'inherit'};
    margin-left: ${({ left }) => isString(left) ? left : `${left || 0}px`};
    margin-right: ${({ right }) => isString(right) ? right : `${right || 0}px`};
    ${p => p.centerAbsoluteHorizantal ? centerAbsoluteHorizantal : null};
`;

export default Title;