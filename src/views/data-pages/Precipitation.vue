<template>
  <div class="vx-row">
    <vs-divider/>
    <div class="vx-row toprow1 mb-9">
      <div class="vx-col sm:w-1/4 w-full">
        <span>Number of Years of Synthetic Data Generation</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="prNoOfYears"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>years</span>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>
    <!-- Precipitation Table-->
    <vs-divider class="mb-9">Normal Mean Monthly Pecipitation</vs-divider>
    <div class="vx-col md:w-2/2 w-full">
      <vs-table :data="precipitationData">
        <template slot="thead">
          <vs-th>Month</vs-th>
          <vs-th>Days of Rainfall</vs-th>
          <vs-th>Ammount of Rainfall</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].month">{{ data[indextr].month }}</vs-td>

            <vs-td :data="data[indextr].days">
              <vx-input-group class="mb-base">
                <vs-input type="number" v-model="data[indextr].days"/>
                <template slot="append">
                  <div class="append-text bg-primary">
                    <span>days</span>
                  </div>
                </template>
              </vx-input-group>
            </vs-td>
            <vs-td :data="data[indextr].rain">
              <vx-input-group class="mb-base">
                <vs-input type="number" v-model="data[indextr].rain"/>
                <template slot="append">
                  <div class="append-text bg-primary">
                    <span>mm</span>
                  </div>
                </template>
              </vx-input-group>
            </vs-td>
          </vs-tr>
          <vs-tr>
            <vs-td>
              <em>Total</em>
            </vs-td>
            <vs-td>{{daysOfRainfall}} days of Rainfall</vs-td>
            <vs-td>{{totalAmountOfRainfall}}mm amount of Rainfall</vs-td>
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
      pageTitle: "Synthetic Precipitation Data"
    };
  },
  computed: {
    ...mapState({
    }),
    daysOfRainfall() {
      return this.precipitationData.reduce(
        (previous, current) => Number(previous) + Number(current.days),
        0
      );
    },
    totalAmountOfRainfall() {
      return this.precipitationData.reduce(
        (previous, current) => Number(previous) + Number(current.rain),
        0
      );
    },
    ...mapSetterWithUpdateData(
      mapState({
        prNoOfYears: "prNoOfYears",
        precipitationData: "precipitationData",
      }),
      store
    ),
  },
  created() {
    // this.precipitationData.reduce((previous, current) => previous + current, 0)
  },
  beforeUpdate(){
    
  },
  watch: {
    
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

