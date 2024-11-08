const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map((e) => e % 42 === 0 ? "forty two!" : e);
};

export default transformFortyTwo;
