import dateRange from './dateRange';
//import moment from 'moment';


export default ({startDate, dateCovered, temperatureData, meanRH}) => {
    const monthList = dateRange(startDate, dateCovered);

    //const numberOfDays = moment(startDate).diff(moment(dateCovered), "days") + 1;
    function restructure (dt) {
        const arr = [];
        dt.forEach(element => {
            arr.push(Number(element.split("-")[1]) - 1);
        });
        return arr
    }

    const structureMonth = restructure(monthList);

    const totalEvapotranspiration = structureMonth.reduce((prev, current) => {
        const RF = 0.083;
        const RH = meanRH;
        const temp = Number(temperatureData[current].temp);
        const dailyET = ((RF *((0.45 * temp) + 8)) * (386 - Math.pow(RH, 1.19) )) /100;
        return prev + (dailyET * 30);
    }, 0);

    return totalEvapotranspiration;

}