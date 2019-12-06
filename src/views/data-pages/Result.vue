<template>
  <div>
    <div class="vx-row">
            <div class="vx-col md:w-1/2">
                <vx-card title="Average monthly rainfall ">
            <vue-apex-charts type="bar" height="350" :options="rainfallChart.chartOptions" :series="rainfallChart.series"></vue-apex-charts>
        </vx-card>
        </div>
        <div class="vx-col md:w-1/2">
                <vx-card title="Average monthly Temperature">
            <vue-apex-charts type="bar" height="350" :options="temperatureChart.chartOptions" :series="temperatureChart.series"></vue-apex-charts>
        </vx-card>
        </div>
        
    </div>
    <div class="vx-row table-margin">
        <div class="vx-col">
      <vx-card title="Phases I and II of the SWB Model">
          <vs-table :data="result">
        <template slot="thead">
          <vs-th>Cell</vs-th>
          <vs-th>Started date</vs-th>
          <vs-th>End Date</vs-th>
          <vs-th>Construction Days</vs-th>
          <vs-th>Date Covered</vs-th>
          <vs-th>Exposure Days</vs-th>
          <vs-th>
            Surface Area (m
            <sup>2</sup>)
          </vs-th>
          <vs-th>Waste Content (tons)</vs-th>
          <vs-th>
            Field Capacity
            <span>(m</span>
            <span>
              <sup>3</sup>/tons)
            </span>
          </vs-th>
          <vs-th>Rainfall (mm)</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>Cell {{data[indextr].cell}}</vs-td>
            <vs-td>{{data[indextr].constructionTime.start | format_date}}</vs-td>
            <vs-td>{{data[indextr].constructionTime.end | format_date}}</vs-td>
            <vs-td>{{data[indextr].constructionTime.days}}</vs-td>
            <vs-td>{{data[indextr].exposureTime.end | format_date}}</vs-td>
            <vs-td>{{data[indextr].exposureTime.days}}</vs-td>
            <vs-td>{{data[indextr].area | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].dryWasteContent | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].fieldCapacity | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].rainfall | fixed_number}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
      </vx-card>
      </div>
    </div> 
    <div class="vx-row table-margin">
        <div class="vx-col">
            <vx-card title="Phases III and IV of the SWB Model">
                <vs-table :data="result">
        <template slot="thead">
          <vs-th>Cell</vs-th>
          <vs-th>Evapotranspiration</vs-th>
          <vs-th>Surface Runoff</vs-th>
          <vs-th>Surface Infiltration</vs-th>
          <vs-th>Height of Moisture</vs-th>
          <vs-th>Height of Solid waste</vs-th>
          <vs-th>Field Capacity: Covering Material</vs-th>
          <vs-th>Percolated Water</vs-th>
          <vs-th>Required Water</vs-th>
          <vs-th>Volume of Leachate</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>Cell {{data[indextr].cell}}</vs-td>
            <vs-td>{{data[indextr].ET | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].surfaceRunoff | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].percolationHeight | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].moistureHeight | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].waterHeight | fixed_number}}</vs-td>
            <vs-td>{{data[indextr].coverMaterial }}</vs-td>
            <vs-td>{{data[indextr].percolatingWater | fixed_number}}</vs-td>
            <vs-td>{{''}}</vs-td>
            <vs-td>{{data[indextr].leachateVolume | fixed_number}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
            </vx-card>
      
      </div>
    </div>
    <div class="vx-row w-full">
        <div class="vx-col w-full">
            <vx-card title="Total amount exposed to Rainfall and Evapotranspiration per time">
                 <vue-apex-charts type="area" height="350" :options="mixedChart.chartOptions" :series="mixedChart.series"></vue-apex-charts>
            </vx-card>
        </div>
    </div>
    <div class="vx-row w-full">
        <div class="vx-col w-full">
            <vx-card title="Total Amount of Moisture Contributed by each Cell">
                 <vue-apex-charts type="area" height="350" :options="ssChart.chartOptions" :series="ssChart.series"></vue-apex-charts>
            </vx-card>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import computedDataTable from "../../calculations/computeTable.js";
//import { close } from "fs";
import VueApexCharts from 'vue-apexcharts';
import moment from 'moment';

export default {
  data() {
    return {
      pageTitle: "Model Result",
      result: null,
      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
      // The rainfall Chart
      rainfallChart: {
        series: [{
            name: 'Average monthly Precipitation',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chartOptions: {
          colors: ['#7367F0'],
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: 'rounded',
              columnWidth: '55%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },

          xaxis: {
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          yaxis: {
            title: {
              text: 'Precipitation (mm)'
            }
          },
          fill: {
            opacity: 1

          },
          tooltip: {
            y: {
              formatter: function(val) {
                return  val + " mm"
              }
            }
          }
        }
      },
      temperatureChart: {
        series: [{
            name: 'Average Monthly Temperature',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chartOptions: {
          colors: ['#EA5455'],
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: 'rounded',
              columnWidth: '55%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },

          xaxis: {
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          yaxis: {
            title: {
              text: 'Temperature (Celcius)'
            }
          },
          fill: {
            opacity: 1

          },
          tooltip: {
            y: {
              formatter: function(val) {
                return  + val + " degree"
              }
            }
          }
        }
      },
      mixedChart: {
        series: null,
        chartOptions: {
          colors: this.themeColors,
          chart: {
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          labels: null,
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'mm',
            },
            min: 0
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function(y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " mm";
                }
                return y;

              }
            }
          }
        }
      },
      ssChart: {
        series: null,
        chartOptions: {
          colors: this.themeColors,
          chart: {
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          labels: null,
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'mm',
            },
            min: 0
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function(y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " mm";
                }
                return y;

              }
            }
          }
        }
      },
    };
  },
  methods: {
    computeTable() {
      const meanRH = (this.evRH1 + this.evRH2 + this.evRH3 + this.evRH4) / 4;
      //console.log(meanRH);
      const res = computedDataTable({
        cellData: this.cellData,
        temperatureData: this.temperatureData,
        meanRH,
        precipitationData: this.precipitationData
      });

      this.result = res;

      const temeratureLabels = this.temperatureData.map((cell) => {
          return cell.temp;
      })
        this.temperatureChart.series = [{
            name: 'Average Monthly Temperature',
            data: temeratureLabels
        }]


      const precipitationLabels = this.precipitationData.map((cell) => {
          return cell.rain;
      })
      this.rainfallChart.series = [{
            name: 'Average Monthly Precipitation',
            data: precipitationLabels
        }]

        let mixedChartseries ;
        const totalPrecipitationCell = res.map((cell) =>  Number(cell.rainfall.toFixed(0)))
        const totalEvapotranspirationCell = res.map((cell) => Number(cell.ET.toFixed(0)))
        const totalSurfaceInfiltrationCell = res.map((cell) => Number(cell.percolationHeight.toFixed(0)))
        const totalPercolatedWaterCell = res.map((cell) => Number(cell.percolatingWater.toFixed(0)))
        const totalMoistureContent = res.map((cell) => Number(cell.moistureHeight.toFixed(0)))

        const mixedChartLabel = res.map(cell => moment(cell.exposureTime.end).format("MM/DD/YYYY"))
        this.mixedChart.chartOptions.labels = mixedChartLabel;
        this.ssChart.chartOptions.labels = mixedChartLabel;

        mixedChartseries = [{
            name: 'Preipitation',
            data: totalPrecipitationCell
          },{
            name: 'Evapotranspiration',
            data: totalEvapotranspirationCell
          },
        ];
        const ssChartseries = [
            {
            name: 'Surface Infiltration',
            data: totalSurfaceInfiltrationCell
        },{
            name: 'Percolated Water',
            data: totalPercolatedWaterCell
        },{
            name: 'Soil Moisture',
            data: totalMoistureContent
        }]
        this.ssChart.series = ssChartseries
        this.mixedChart.series = mixedChartseries;
    }
  },
  computed: {
    ...mapState({
      cellData: "cellData",
      landfillArea: "landfillArea",
      percRunoff: "percRunoff",
      landfillSlope: "landfillSlope",
      slopeLength: "slopeLength",
      soilTexture: "soilTexture",
      sdVegetation: "sdVegetation",
      calcCurveNumber: "calcCurveNumber",
      tempNoOfYears: "tempNoOfYears",
      stationLatitude: "stationLatitude",
      temperatureData: "temperatureData",
      prNoOfYears: "prNoOfYears",
      precipitationData: "precipitationData",
      evCity: "evCity",
      evState: "evState",
      evLatitude: "evLatitude",
      evUnit: "evUnit",
      evZoneDepth: "evZoneDepth",
      evLAI: "evLAI",
      evStartDay: "evStartDay",
      evEndDay: "evEndDay",
      evWindSpeed: "evWindSpeed",
      evRH1: "evRH1",
      evRH2: "evRH2",
      evRH3: "evRH3",
      evRH4: "evRH4",
    })
  },
  mounted () {
      this.computeTable();
  },
  components: {
      VueApexCharts
  }
};
</script>
<style lang="scss" scoped>
.vx-row {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
