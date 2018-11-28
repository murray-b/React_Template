/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const myStyles = css`
  background: rebeccapurple;
  display: flex;
`;

const small = css`
  width: 25px;
  height: 25px;
`;

const large = css`
  width: 100px;
  height: 100px;
`;

const Logo = styled.img`
  border: 2px solid black;
  ${props => props.circle && 'border-radius: 50%'};
  ${props => props.size && props.size};
  @media screen and (max-width: 425px) {
    ${small}
  }
`;

const Header = () => (
  <div css={myStyles}>
    <h1>Hey</h1>
    <h1>Bye</h1>
    <Logo
      circle
      size={large}
      src="https://emotion.sh/static/emotion-a76dfa0d18a0536af9e917cdb8f873b9-78792.webp"
    />
  </div>
);

export default Header;
