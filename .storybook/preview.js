import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/MainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Story />
      </>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
