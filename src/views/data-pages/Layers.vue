<template>
  <div class="vx-row">
    <div class="cell-div w-full" :key="indextr" v-for="(cell, indextr) in cellData">
      <vs-divider class="mb-6">Cell {{cell.cell}}</vs-divider>
      <div class="vx-row w-full">
        <div class="vx-col lg:w-1/3 w-full">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Start Date of Filling</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <datepicker placeholder="Start Date" v-model="cellData[indextr].startDate"></datepicker>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>End Date of Filling</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <datepicker placeholder="End Date" v-model="cellData[indextr].endDate"></datepicker>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Date Covered</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <datepicker placeholder="End Date" v-model="cellData[indextr].dateCovered"></datepicker>
            </div>
          </div>
        </div>
        <div class="vx-col lg:w-1/3 w-full">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Surface Area</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vx-input-group class="">
              <vs-input type="number" v-model="cellData[indextr].surfaceArea"/>
              <template slot="append">
                <div class="append-text bg-primary">
                  <span>m<sup>2</sup></span>
                </div>
              </template>
            </vx-input-group>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Daily Disposal</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vx-input-group class="">
              <vs-input type="number" v-model="cellData[indextr].dailyDisposal"/>
              <template slot="append">
                <div class="append-text bg-primary">
                  <span>tons/day</span>
                </div>
              </template>
            </vx-input-group>
            </div>
          </div>
        </div>
        <div class="vx-col lg:w-1/3 w-full">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Field Capacity</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vx-input-group class="">
              <vs-input type="number" v-model="cellData[indextr].fieldCapacity"/>
              <template slot="append">
                <div class="append-text bg-primary">
                  <span>m<sup>3</sup>/ton</span>
                </div>
              </template>
            </vx-input-group>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Moisture Content</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vx-input-group class="">
              <vs-input type="number" v-model="cellData[indextr].moistureContent"/>
              <template slot="append">
                <div class="append-text bg-primary">
                  <span>%</span>
                </div>
              </template>
            </vx-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import {mapState} from 'vuex'

export default {
  data() {
    return {
      // Page Meta
      pageTitle: "Cell Data"
    };
  },
  computed: {
    ...mapState({
      cellData: "cellData",
      prNoOfYears : "prNoOfYears"
    })
  },
  watch: {
    cellData : {
      deep: true,
      immediate: true,
      handler (list) {
        this.updateList(list, 'cellData');
      },
    }
  },
  methods: {
    updateList(list, listName) {
      const dt = this.$store.commit("UPDATE_LIST", {key: listName, list})
    },
  },
  created() {
    // this.precipitationData.reduce((previous, current) => previous + current, 0)
    //this.$store.state.dashboardTitle = this.pageTitle;
  },
  components: {
    Datepicker
  }
};
</script>