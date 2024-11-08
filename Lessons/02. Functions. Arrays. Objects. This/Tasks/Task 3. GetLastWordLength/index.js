const getLastWordLength = (str) => {
    let s = str.trim();
    if (s === "") {
        return 0;
    }
    let arr = s.split(' ');
    return arr[arr.length - 1].length;
};

export default getLastWordLength;
