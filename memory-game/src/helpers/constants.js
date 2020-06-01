export const STORAGE = {
    GAME: {
        PLAYER: {
            NAME: 'GAME.PLAYER.NAME',
            LEVEL: 'GAME.PLAYER.LEVEL',
            WIN_TYPE: 'GAME.PLAYER.WIN_TYPE'
        },
        CONFIG: {
            EASY: {
                maxAllowedTryNumbers: 5,
                countDownToStartTimer: 0,
                countDownToFinishTimer: 60 * 7
            },
            NORMAL: {
                maxAllowedTryNumbers: 3,
                countDownToStartTimer: 60 * 5,
                countDownToFinishTimer: 60 * 5
            },
            HARD: {
                maxAllowedTryNumbers: 1,
                countDownToStartTimer: 60 * 2,
                countDownToFinishTimer: 60 * 4
            }
        }
    }
};

export const TRANSLATION = {
    GAME: {
        PLAYER: {
            WIN_TYPE: {
                asc: 'ascending',
                desc: 'descending'
            }
        },
    }
};

export const COLORS = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const SOCKET = {
    URL: 'http://localhost:9000',
    CHANNEL: {
        PING: 'p_i_n_g',
        PONG: 'p_o_n_g',
        CONNECT: 'connect',
        DISCONNECT: 'disconnect',
        RANDOM_NUMBERS: 'random numbers',
    }
};