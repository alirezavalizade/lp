import { css } from 'styled-components';

export const absolute0 = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const centerAbsoluteVertical = css`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
`;

export const centerAbsoluteHorizantal = css`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

export const boxShadow = css`
  box-shadow: ${p => p.strongShadow ? '0 4px 60px rgba(0, 0, 0, .5)' : '0 0 10px rgba(0, 0, 0, 0.3)'};
`;

export const pointer = css`
  cursor: pointer;
`;
