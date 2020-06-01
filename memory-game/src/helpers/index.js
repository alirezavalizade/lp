
export const isWin = (array, type = 'asc') => {
    const numbers = array.map(({ hiddenNumber }) => hiddenNumber);
    return numbers.every((item, index) => {
        if (numbers[index + 1]) {
        if (type === 'asc') {
            return item < numbers[index + 1];
        }
        return item > numbers[index + 1];
        }
        return true;
    });
};

export const secondToHMS = (time) => {
    if (time) {
        const secNum = parseInt(time, 10);
        const hours = Math.floor(secNum / 3600) % 24;
        const minutes = Math.floor(secNum / 60) % 60;
        const seconds = secNum % 60;
        return [hours, minutes, seconds]
            .map((v, i) => (v < 10 && i !== 1 ? `0${v}` : v))
            .filter((v, i) => v !== '00' || i > 0)
            .join(':');
        }
    return '0:00';
  };

export const isString = (s) => typeof s === 'string';