import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pointer, centerAbsoluteVertical } from '../../../theme/css';

export const Wrapper = styled.aside`
    min-height: 100%;
    z-index: 99999;
    width: ${p => p.theme.sidebar.width}px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background: #483876;
    border-radius: ${p => p.theme.pixels.radius}px 0 0 ${p => p.theme.pixels.radius}px;
`;

export const MenuWrapper = styled(motion.nav)``;

export const Menu = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${centerAbsoluteVertical};
`;

export const MenuItem = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  min-height: 48px;
  position: relative;
  ${pointer};  
`;

export const Header = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Footer = styled(motion.div)`
  margin-top: auto;
  margin-bottom: 15px;
  max-height: 25px;
  ${pointer};  
`;
