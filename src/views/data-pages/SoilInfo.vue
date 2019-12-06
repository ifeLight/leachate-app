<template>
  <div class="vx-row">
    <vs-divider class="mb-6">Landfill Data</vs-divider>
    <div class="vx-row mb-6 w-full">
      <div class="vx-col sm:w-1/4 w-full">
        <span>Landfill Area</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="landfillArea"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>hectares</span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col sm:w-1/4 w-full">
        <span>Percentage of Area where Runoff is possible</span>
      </div>
      <div class="vx-col sm:w-3/4 w-full">
        <vx-input-group class="mb-base">
          <vs-input type="number" v-model="percRunoff"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span>%</span>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>

    <!--- Curve Number-->
    <vs-divider class="mb-6">Curve Number Data</vs-divider>
    <div class="vx-row w-full">
      <div class="vx-col lg:w-1/2 w-full">
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Slope</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vx-input-group class>
              <vs-input type="number" v-model="landfillSlope"/>
              <template slot="append">
                <div class="append-text bg-primary">
                  <span>%</span>
                </div>
              </template>
            </vx-input-group>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Slope Length</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vx-input-group class>
              <vs-input type="number" v-model="slopeLength"/>
              <template slot="append">
                <div class="append-text bg-primary">
                  <span>m</span>
                </div>
              </template>
            </vx-input-group>
          </div>
        </div>
      </div>
      <div class="vx-col lg:w-1/2 w-full">
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Soil Texture</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="soilTexture"/>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Vegetation</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="text" v-model="sdVegetation"/>
          </div>
        </div>
      </div>
      <!-- Calculated Curve Number -->
      <div class="vx-col sm:w-1/3 w-full">
        <span>Calculated Curve Number</span>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vx-input-group class>
          <vs-input type="number" v-model="calcCurveNumber"/>
          <template slot="append">
            <div class="append-text bg-primary">
              <span></span>
            </div>
          </template>
        </vx-input-group>
      </div>
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
      //Meta
      pageTitle: "Landfill & Soil Data"
    };
  },
  computed: {
    ...mapSetterWithUpdateData(
      mapState({
        landfillArea: 'landfillArea',
        percRunoff: 'percRunoff',
        landfillSlope: 'landfillSlope',
        slopeLength: 'slopeLength',
        soilTexture: 'soilTexture',
        sdVegetation: 'sdVegetation',
        calcCurveNumber: 'calcCurveNumber',
      }),
      store
    )
  }
};
</script>
