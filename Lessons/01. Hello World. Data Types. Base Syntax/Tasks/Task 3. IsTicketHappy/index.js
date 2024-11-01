const isTicketHappy = (numStr) => {
    const index = numStr.length;
    if (index % 2 === 0) {
        const  arr = [...numStr];
        for (let i = 0; i < index; i++) {
            arr[i] = Number(arr[i]);
        }
        let a = 0;
        let b = 0;
        for (let i = 0; i < index/2; i++) {
            a += arr[i];
            b += arr[index - i - 1];
        }
        return a === b;
    } else {
        return false;
    }
};

export default isTicketHappy;
