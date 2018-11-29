/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Logo, logo_small } from '../core/Image';

const HeaderWrapper = styled.header(css`
  padding: 8px 32px;
  max-width: 1300px;
  margin: 0 auto;
  min-height: 54px;
  display: flex;
  h1 {
    align-self: center;
    color: red;
  }
`);

export const Header = () => (
  <HeaderWrapper>
    <h1>UApp</h1>
  </HeaderWrapper>
);
