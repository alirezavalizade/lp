import styled from 'styled-components';
import { boxShadow } from '../../../../theme/css';

export const Image = styled.img`
    display: block;
    max-width: 100%;
    width: ${p => p.size}px;
    border-radius: ${p => p.circle ? '50%' : 0};
    user-select: none;
    ${boxShadow};
`;