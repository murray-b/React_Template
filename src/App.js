/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Routes } from './pages/routes';
import { Header } from './Components/Header';

export const App = () => (
  <div>
    <Header />
    <div
      css={css`
        background-color: #fbfbfb;
      `}
    >
      <Routes />
    </div>
  </div>
);
