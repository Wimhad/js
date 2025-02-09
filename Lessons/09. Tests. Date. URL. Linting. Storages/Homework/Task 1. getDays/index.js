const daysInMonthsNonLeapYear = {
    'January': 31,
    'February' : 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31,
}

const daysInFebruary = {
    'leapYear': 29,
    'nonLeapYear': 28,
}

const getDaysAmount = (month, year) => {
    if (!daysInMonthsNonLeapYear.hasOwnProperty(month)) {
        return 'error';
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    if (month === 'February') {
        return isLeapYear ? daysInFebruary.leapYear : daysInFebruary.nonLeapYear;
    }

    return daysInMonthsNonLeapYear[month];
};

export default getDaysAmount;
