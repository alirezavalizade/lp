// @flow
import React, { useEffect, useState } from 'react';
import IO from 'socket.io-client';
import { SOCKET } from '../helpers/constants';

export const ClientContext = React.createContext();

export const ClientProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [connection, changeConnection] = useState(false);

    useEffect(() => {
        setSocket(IO(SOCKET.URL));
    }, []);
    
    useEffect(() => {
        if (!socket) {
            return;
        }
        socket.emit(SOCKET.CHANNEL.PING);
        socket.on(SOCKET.CHANNEL.PONG, () => {
            changeConnection(true);
        });
        socket.on(SOCKET.CHANNEL.CONNECT, () => {
            changeConnection(true);
        });
        socket.on(SOCKET.CHANNEL.DISCONNECT, () => {
            changeConnection(false);
        });
    }, [socket]);
  
    return (
        <ClientContext.Provider
            value={{
                socket,
                connection,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};
