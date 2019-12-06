<template>
  <div>
    <!--Top Form -->
    <vs-divider/>
    <div class="vx-row">
      <div class="vx-col lg:w-1/2 w-full">
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Unit</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-select v-model="evUnit"  class="w-full select-large">
              <vs-select-item
                :key="index"
                :value="item"
                :text="item"
                v-for="(item,index) in ['metric', 'customary']"
                class="w-full"
              />
            </vs-select>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Latitude</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              class="w-full"
              type="number"
              v-model="evLatitude"
            />
          </div>
        </div>
      </div>
      <div class="vx-col lg:w-1/2 w-full">
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>City</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="evCity"/>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>State</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="text" v-model="evState"/>
          </div>
        </div>
      </div>
    </div>
    <!-- Middle Form -->
    <vs-divider/>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/4 w-full">
        <span>Evaporative Zone Depth</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evZoneDepth"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>mm</span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col sm:w-1/4 w-full">
        <span>Maximum Leaf Area Index</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evLAI"/>
        </vx-input-group>
      </div>
      <div class="vx-col sm:w-1/4 w-full">
        <span>Growing Season Start Day</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evStartDay"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>day</span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col sm:w-1/4 w-full">
        <span>Growing Season End Day</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evEndDay"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>day</span>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>
    <vs-divider/>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/4 w-full">
        <span>Average Wind Speed</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evWindSpeed"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>KpH</span>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>

    <!-- Bottom form -->
    <vs-divider/>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/4 w-full">
        <span>First Quarter Relative Humidity</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evRH1"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>%</span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col sm:w-1/4 w-full">
        <span>Second Quarter Relative Humidity</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evRH2"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>%</span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col sm:w-1/4 w-full">
        <span>Third Quarter Relative Humidity</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evRH3"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>%</span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col sm:w-1/4 w-full">
        <span>Fourth Quarter Relative Humidity</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="evRH4"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>%</span>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { mapState } from "vuex";

import store from '../../store/store.js'
import { mapSetterWithUpdateData } from "../../store/func/mapSetters.js";

export default {
  data() {
    return {
      //Input Data

      // meta Data
      pageTitle: "Evapotranspiration Data"
    };
  },
  computed: {
    ...mapSetterWithUpdateData(
      mapState({
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
        evRH4: "evRH4"
      }),
      store
    ),
  },
  methods: {

  },
  beforeUpdate() {
    //this.$store.state.dashboardTitle = this.pageTitle;
  }
};
</script>

<style lang="scss" scoped>
</style>
