const getIntersectionUnion = (arrOne, arrTwo) => {
    const set1 = new Set(arrOne);
    const set2 = new Set(arrTwo);
    const intersection = Array.from([...set1].filter((item) => set2.has(item))
                                                        .sort((a,b) => a - b));
    const union = Array.from(new Set([...arrOne,...arrTwo]))
        .sort((a,b) => a - b);
    return {
        intersection,
        union
    };
};

export default getIntersectionUnion;
