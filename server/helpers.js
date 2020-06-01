const getRandomNumbers = (length, maxNumber = 80) => {
    const items = Array.from({ length }, () => Math.floor(Math.random() * maxNumber));
    const hasDuplicate = (new Set(items)).size !== items.length;
    if (hasDuplicate) {
        return getRandomNumbers(length);
    }
    return items;
};

module.exports = {
    getRandomNumbers  
};