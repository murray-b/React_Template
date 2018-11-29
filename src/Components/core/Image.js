/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

export const small = css`
  width: 100px;
`;

export const large = css`
  width: 200px;
`;

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.width};
`;

export const Logo = styled.img`
  ${props => props.size && props.size};
`;
