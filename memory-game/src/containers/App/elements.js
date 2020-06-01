import styled from "styled-components";
import { absolute0 } from '../../theme/css';

export const Layout = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: ${p => p.theme.colors.bgMain};
  ${absolute0};
`;
