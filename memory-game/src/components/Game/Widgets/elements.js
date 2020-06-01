import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const CardsWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 30px -8px;
    perspective: 600px;
`;

export const Card = styled(motion.div)`
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${p => p.theme.typography.fancy};
    user-select: none;
    margin: 8px;
    font-size: 50px;
    color: #FFF;
    transform-origin: center right;
    transform-style: preserve-3d;
`;

const baseCardSide = css`
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardBack = styled.div`
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background: rgb(68, 0, 255);
    ${baseCardSide};
`;

export const CardFront = styled.div`
    backface-visibility: hidden;  
    background: #FFF;
    color: #000;
    ${baseCardSide};
`;

export const SmallNumber = styled(motion.div)`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 15px;
`;

export const PlayerHeartWrapper = styled(motion.div)`
    display: flex;
`;

export const HeartItem = styled(motion.div)``;

export const Header = styled.header`
  flex-shrink: 0;
  position: relative;
  padding: 0 20px;
`;

export const HeaderInside = styled.div`
  height: 82px;
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const TimerCounter = styled.div`
    font-size: 48px;
    color: #FFF;
    margin-left: auto;
    font-family: ${p => p.theme.typography.fancy};  
    display: flex;
    justify-content: center;
    align-items: center;
`;