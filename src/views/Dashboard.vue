<template>
  <form-wizard color="rgba(var(--vs-primary), 1)" @on-change="tabChanged" :title="$store.state.dashboardTitle" :subtitle="null" finishButtonText="Predict the Model" @on-complete="formSubmitted">
      <tab-content title="ET" class="mb-5" icon="feather icon-home">
		  <evapotranspiration></evapotranspiration>
      </tab-content>

      <!-- tab 2 content -->
      <tab-content title="Precipitation" class="mb-5" icon="feather icon-briefcase">
		  <precipitation></precipitation>
      </tab-content>


	  <tab-content title="Temperature" class="mb-5" icon="feather icon-briefcase">
          <temperature></temperature>
      </tab-content>

	  <tab-content title="Soil Data" class="mb-5" icon="feather icon-briefcase">
          <soil-info></soil-info>
      </tab-content>

	  <tab-content title="Layers" class="mb-5" icon="feather icon-image">
          <layers></layers>
      </tab-content>
  </form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import store from '../store/store.js'
import Evapotranspiration from './data-pages/Evapotranspiration'
import Precipitation from './data-pages/Precipitation'
import Layers from './data-pages/Layers'
import Temperature from './data-pages/Temperature'
import SoilInfo from './data-pages/SoilInfo'
import CurveNumber from './data-pages/CurveNumber'

export default {
  store,
  data() {
    return {
      firstName: "",
      /// other data....
      dashboardTitle : [
        "Evapotranspiration Data",
        'Synthetic Precipitation Data',
        'Synthetic Temperature Data',
        'Landfill & Soil Data',
        'Cell Data'
      ],
    }
  },
  methods: {
    formSubmitted() {
      this.$router.push('result');
    },
    tabChanged (prev, next) {
      this.$store.commit('UPDATE_DATA', {key: 'dashboardTitle', value: this.dashboardTitle[next]})
    }
  },
  components: {
    FormWizard,
	TabContent,
	Evapotranspiration,
	Precipitation,
	Layers,
	Temperature,
	SoilInfo,
	CurveNumber
  }
}
</script>