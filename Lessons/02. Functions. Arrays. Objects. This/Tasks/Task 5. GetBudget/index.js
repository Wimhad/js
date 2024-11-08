const getBudget = (people) => {
    let b = 0;
    people.forEach((p) => b += p.budget);
    return b;
};

export default getBudget;
