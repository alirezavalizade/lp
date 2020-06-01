const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const { getRandomNumbers } = require('./helpers');

const CHANNEL_NAMES = {
    GAME: {
        PING: 'p_i_n_g',
        PONG: 'p_o_n_g',
        RANDOM_NUMBERS: 'random numbers'
    }
};

io.on('connection', (socket) => {
    socket.on(CHANNEL_NAMES.GAME.PING, () => {
        io.emit(CHANNEL_NAMES.GAME.PONG);
    });
    
    socket.on(CHANNEL_NAMES.GAME.RANDOM_NUMBERS, (lenght) => {
        io.emit(CHANNEL_NAMES.GAME.RANDOM_NUMBERS, getRandomNumbers(lenght));
    });
});

http.listen(9000, () => {
    console.log('listening on *:9000');
});