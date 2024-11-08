const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    let v = 0;
    let n = [...convertToBinary(num)];
    for (const e of n) {
            v += parseInt(e);
    }
    return v;
};

export default getHammingWeight;
