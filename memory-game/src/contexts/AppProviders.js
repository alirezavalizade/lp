import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../theme';
import { GameProvider, ClientProvider } from './';

const AppProviders = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ClientProvider>
                <GameProvider>
                    {children}
                </GameProvider>
            </ClientProvider>
        </ThemeProvider>
    );
};

export default AppProviders;