<template>
  <div class="vx-row">
    <vs-divider/>
    <div class="vx-row toprow1 mb-9">
      <div class="vx-col sm:w-1/4 w-full">
        <span>Number of Years of Synthetic Data Generation</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="tempNoOfYears"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>years</span>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>
    <!-- Solar Rdadiation Form -->
    <vs-divider>Solar Radiation Data</vs-divider>
    <div class="vx-row toprow1 mb-9">
      <div class="vx-col sm:w-1/4 w-full">
        <span>Station Latitude</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="stationLatitude"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>degrees</span>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>
    <!-- Precipitation Table-->
    <vs-divider class="mb-9">Normal Mean Monthly Temperature</vs-divider>
    <div class="vx-col md:w-2/2 w-full">
      <vs-table :data="temperatureData">
        <template slot="thead">
          <vs-th>Month</vs-th>
          <vs-th>Average Temperature</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].month">{{ data[indextr].month }}</vs-td>

            <vs-td :data="data[indextr].days">
              <vx-input-group class="mb-base">
                <vs-input type="number" v-model="data[indextr].temp"/>
                <template slot="append">
                  <div class="append-text bg-primary">
                    <span>
                      <sup>o</sup>C
                    </span>
                  </div>
                </template>
              </vx-input-group>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import store from "../../store/store.js";
import { mapSetterWithUpdateData } from "../../store/func/mapSetters.js";

export default {
  data() {
    return {
      // Page Meta
      pageTitle: "Synthetic Temperature Data"
    };
  },
  computed: {
    ...mapSetterWithUpdateData(
      mapState({
        tempNoOfYears: "tempNoOfYears",
        stationLatitude: "stationLatitude",
        temperatureData: "temperatureData"
      }),
      store
    )
  },
  created() {
    // this.precipitationData.reduce((previous, current) => previous + current, 0)
  }
};
</script>
<style lang="scss" scoped>
.vs-table--tbody-table .tr-values td {
  padding: 0px 10px;
}
.toprow1 {
  width: 100%;
}
</style>

