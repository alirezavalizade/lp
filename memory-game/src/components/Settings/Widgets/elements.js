import styled, { css } from "styled-components";
import { motion } from 'framer-motion';
import { Button } from '../../App/ui';
import { centerAbsoluteVertical } from '../../../theme/css';

export const Wrapper = styled(motion.div)`
    border: 1px solid #FFF;
    color: #FFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: ${p => p.theme.pixels.radius}px;
`;

const activeState = css`
    background: #FFF;
    color: #000;
`;

export const MenuItem = styled(Button).attrs({ f: 'fancy' })`
    border-radius: 0;
    border: none;
    padding: 10px 80px;
    font-size: 30px;
    &:not(:last-child) {
        border-bottom: 1px solid #FFF;
    }
    ${p => p.active ? activeState : null};
`;

export const Form = styled(motion.form)``;

export const InputWrapper = styled(motion.div)`
    position: relative;
`;

export const BadgeWrapper = styled.div`
    right: 20px;
    ${centerAbsoluteVertical};
`;

export const MaxLengthBadge = styled(motion.div)`
    font-family: ${p => p.theme.typography.fancy};
`;

export const SelectorWrapper = styled(motion.div)``;

export const GridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Grid = styled(motion.div)`
    position: relative;
    width: 130px;
    height: 130px;
    margin: 2px;
    font-size: 45px;
    background: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-family: ${p => p.theme.typography.fancy};
    user-select: none;
`;

export const MotionGrid = styled(motion.div)`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid hotpink;
    border-radius: 10px;
    z-index: 1;
    pointer-events: none;
`;