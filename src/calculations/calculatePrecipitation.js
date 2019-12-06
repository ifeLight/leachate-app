import dateRange from './dateRange';

export default (startDate, endDate, preciptationData) => {
    const monthList = dateRange(startDate, endDate);

    function restructure (dt) {
        const arr = [];
        dt.forEach(element => {
            arr.push(Number(element.split("-")[1]) - 1);
        });
        return arr
    }

    const structureMonth = restructure(monthList);

    const totalPrecipitation = structureMonth.reduce((prev, current) => {
        return (Number(preciptationData[current].rain) + prev)
    }, 0);

    return totalPrecipitation;

}