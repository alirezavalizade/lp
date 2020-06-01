import styled from 'styled-components';

const Space = styled.div`
  width: ${p => p.size || 5}px;
  height: ${p => p.size || 5}px;
  vertical-align: middle;
  display: inline-block;
`;

export default Space;
