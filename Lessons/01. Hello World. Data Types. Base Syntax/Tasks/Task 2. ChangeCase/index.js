const changeCase = (str) => {
    const sem = [...str];
    for(const s of sem) {
        if(s === s.toLowerCase()) {
            s.toUpperCase();
        }
    }
    return sem.join("");
};

export default changeCase;
