import moment from 'moment';

import calculatePrecipitation from './calculatePrecipitation';
import calculateEvapotranspiration from './calculateEvapotranspiration'

export default ({
  cellData,
  temperatureData,
  precipitationData,
  meanRH
}) => {
  const cells = [];
  cellData.forEach((cell, index) => {
    const {
      cell: cellName,
      startDate,
      endDate,
      dateCovered,
      surfaceArea,
      dailyDisposal,
      fieldCapacity,
      moistureContent
    } = cell;
    cells[index] = {};
    cells[index].cell = cellName;
    cells[index].constructionTime = {}
    cells[index].constructionTime.start = startDate;
    cells[index].constructionTime.end = endDate;
    cells[index].constructionTime.days = moment(endDate).diff(moment(startDate), "days") + 1;

    cells[index].exposureTime = {};
    cells[index].exposureTime.start = startDate;

    //Exposure Date Calculations
    //const endExposuredate = new Date(startDate);
    //endExposuredate.setDate(endExposuredate.getDate + 12);

    cells[index].exposureTime.end = dateCovered;
    cells[index].exposureTime.days = moment(dateCovered).diff(moment(startDate), "days") + 1;

    //Area
    cells[index].area = surfaceArea;

    //waste Content (Bi) = construction days(Ti) * daiyly Disposal (Dd)
    cells[index].wasteContent = Number(cells[index].constructionTime.days) * Number(dailyDisposal);

    //Field Capacity
    cells[index].fieldCapacity = fieldCapacity;

    //Dry Waste Content (Si) = waste Content (Bi) * (1 - moisture content(Hr))
    cells[index].dryWasteContent = cells[index].wasteContent * (1 - (Number(moistureContent) / 100))

    //Rainfall - Precipitation data (Hpi)
    cells[index].rainfall = calculatePrecipitation(startDate, dateCovered, precipitationData);

    //Calculate Evapotranspiration, ETP
    cells[index].ET = calculateEvapotranspiration({startDate, dateCovered, meanRH, temperatureData});

    //Surface Runoff, (Ke)
    cells[index].surfaceRunoff = 0.13;

    //Percolation height (Hi)
    const Hp = cells[index].rainfall;
    const ke = cells[index].surfaceRunoff;
    const ETp = cells[index].ET
    cells[index].percolationHeight = (Hp - (Hp * ke)) - ETp;

    //Height of Moisture (HBi)
    const Bi = cells[index].wasteContent
    const Hr = moistureContent 
    const HBi = (Bi * Hr * 1000) / surfaceArea;
    cells[index].moistureHeight = HBi

    //Water Height required to reach Field capacity
    cells[index].waterHeight = (fieldCapacity * 1000 * cells[index].dryWasteContent) /surfaceArea;

    // Capacity of Covering Material
    cells[index].coverMaterial = 60;

    // Percolating water (Pi)
    const Hi = cells[index].percolationHeight
    cells[index].percolatingWater = (Hi + HBi) - (cells[index].waterHeight - cells[index].coverMaterial);

    //Volume of Leachate(V)
    cells[index].leachateVolume = (cells[index].percolatingWater / 1000) * surfaceArea;
  });

  return cells;
}
