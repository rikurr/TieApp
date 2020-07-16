import React, { FC } from 'react';
import styled from 'styled-components';
import { MarginTop } from './MarginTop';

type Props = {
  wide?: boolean;
};

const Layout: FC<Props> = ({ children, wide }) => {
  return <LayoutWrap wide={wide}>{children}</LayoutWrap>;
};

const LayoutWrap = styled.main<Props>`
  margin: 0 auto;
  margin-top: 66px;
  padding-top: ${(p) => p.theme.spacing(6)}px;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1000px) {
    width: 94%;
  }
`;
export { Layout };
