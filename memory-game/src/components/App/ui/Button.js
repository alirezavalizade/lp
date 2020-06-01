import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isString } from '../../../helpers';

const attrs = {
  whileHover: { scale: 1.11111 },
  whileTap: { scale: .99 }
};

const Button = styled(motion.button).attrs(attrs)`
    font-size: ${p => p.s || 14}px;
    text-transform: unset;
    letter-spacing: 0.16em;
    display: inline-block;
    text-align: center;
    touch-action: manipulation;
    border: 1px solid #FFF;
    border-radius: 500px;
    min-width: 130px;
    max-width: unset;
    white-space: normal;
    will-change: transform;
    line-height: 1.6;
    vertical-align: middle;
    font-weight: 900;
    padding: 5px 45px;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    color: rgba(255,255,255,1);
    user-select: none;
    font-family: ${p => p.theme.typography[p.f || 'bold']};
    margin-left: ${({ left }) => isString(left) ? left : `${left || 0}px`};
    margin-right: ${({ right }) => isString(right) ? right : `${right || 0}px`};
    margin-top: ${p => p.top || 0}px;
    margin-bottom: ${p => p.bottom || 0}px;
`;

export default Button;