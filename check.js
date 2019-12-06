function dateRange(startDate, endDate) {
  let startMont = startDate.getMonth();
  let endMon = endDate.getMonth();
  let startYear = startDate.getFullYear();
  let endYear = endDate.getFullYear();
  let dates = [];

  for (let i = startYear; i <= endYear; i++) {
    let endMonth = i != endYear ? 11 : endMon;
    let startMon = i === startYear ? startMont : 0;
    for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
      let month = j + 1;
      let displayMonth = month < 10 ? '0' + month : month;
      dates.push([i, displayMonth, '01'].join('-'));
    }
  }
  return dates;
}

const dt = dateRange(new Date(2019, 5, 32), new Date(2020, 5, 31));

function restructure (dt) {
    const arr = [];
    dt.forEach(element => {
        arr.push(Number(element.split("-")[1]) - 1);
    });
    return arr
}

console.log(restructure(dt));
