import styled from 'styled-components';
import { motion } from 'framer-motion';
import { absolute0 } from '../../../theme/css';

const attrs = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

const Vibrant = styled(motion.div).attrs(attrs)`
    background-image: linear-gradient(#222540, #362167 85%);
    z-index: -1;
    pointer-events: none;
    ${absolute0};
`;

export default Vibrant;