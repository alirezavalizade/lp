import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: auto;
  width: calc(100% - ${p => p.theme.sidebar.width}px);
`;