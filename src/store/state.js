/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from '@/layouts/components/navbarSearchAndPinList'
import themeConfig from '@/../themeConfig.js'
import colors from '@/../themeConfig.js'

const state = {
    isSidebarActive: true,
    breakpoint: null,
    sidebarWidth: "default",
    reduceButton: themeConfig.sidebarCollapsed,
    bodyOverlay: false,
    sidebarItemsMin: false,
    theme: themeConfig.theme || 'light',
    navbarSearchAndPinList: navbarSearchAndPinList,
    AppActiveUser: {
        id: 0,
        name: 'John Doe',
        about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
        img: 'avatar-s-11.png',
        status: 'online',
    },

    themePrimaryColor: colors.primary,

    starredPages: navbarSearchAndPinList.data.filter((page) => page.highlightAction),
    userRole: null,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar component
    windowWidth: null,
    

    //Dashboard Title
    dashboardTitle: "Evapotranspiration Data",

    // The dashboard default Values
    cellData: [
        {
          cell: "A",
          startDate: new Date(2008, 4, 1),
          endDate: new Date(2008, 4, 31),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 29,
          fieldCapacity: 0.5571,
          dateCovered: new Date(2008, 12, 1),
        },
        {
          cell: "B",
          startDate: new Date(2008, 9, 1),
          endDate: new Date(2008, 10, 5),
          surfaceArea: 2500,
          dailyDisposal: 0.201,
          moistureContent: 27,
          fieldCapacity: 0.55471,
          dateCovered: new Date(2009, 8, 1),
        },
        {
          cell: "C",
          startDate: new Date(2009, 8, 1),
          endDate: new Date(2009, 12, 1),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 26,
          fieldCapacity: 0.4571,
          dateCovered: new Date(2010, 9, 6),
        },
        {
          cell: "D",
          startDate: new Date(2010, 7, 5),
          endDate: new Date(2010, 8, 1),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 27,
          fieldCapacity: 0.591,
          dateCovered: new Date(2011, 9, 1),
        },
        {
          cell: "E",
          startDate: new Date(2011, 8, 23),
          endDate: new Date(2012, 1, 1),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 28,
          fieldCapacity: 0.5471,
          dateCovered: new Date(2013, 4, 1),
        },
        {
          cell: "F",
          startDate: new Date(2013, 3, 1),
          endDate: new Date(2013, 4, 1),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 28,
          fieldCapacity: 0.5271,
          dateCovered: new Date(2015, 4, 1),
        },
        {
          cell: "G",
          startDate: new Date(2015, 3, 23),
          endDate: new Date(2015, 7, 11),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 30,
          fieldCapacity: 0.5571,
          dateCovered: new Date(2017, 1, 1),
        },
        {
          cell: "H",
          startDate: new Date(2016, 12, 12),
          endDate: new Date(2017, 2, 1),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 31,
          fieldCapacity: 0.5271,
          dateCovered: new Date(2018, 4, 1),
        },
        {
          cell: "I",
          startDate: new Date(2018, 2, 12),
          endDate: new Date(2018, 4, 1),
          surfaceArea: 2500,
          dailyDisposal: 0.204,
          moistureContent: 29,
          fieldCapacity: 0.558,
          dateCovered: new Date(2019, 4, 1),
        },
      ],

      //Evapotranspiration Data
      evCity: "Akure",
      evState: "Ondo",
      evLatitude: 7.2341,
      evUnit: "metric",
      evZoneDepth: 10,
      evLAI: 4.1,
      evStartDay: 99,
      evEndDay: 298,
      evWindSpeed: 8,
      evRH1: 72,
      evRH2: 74,
      evRH3: 76,
      evRH4: 75,

      //Precipitation
      precipitationData: [
        {
          month: "January",
          days: 13,
          rain: 35.1
        },
        {
          month: "February",
          days: 17,
          rain: 104
        },
        {
          month: "March",
          days: 28,
          rain: 102.6
        },
        {
          month: "April",
          days: 23,
          rain: 131.2
        },
        {
          month: "May",
          days: 25,
          rain: 206
        },
        {
          month: "June",
          days: 30,
          rain: 407.5
        },
        {
          month: "July",
          days: 31,
          rain: 507.9
        },
        {
          month: "August",
          days: 31,
          rain: 280.5
        },
        {
          month: "September",
          days: 30,
          rain: 566.7
        },
        {
          month: "October",
          days: 29,
          rain: 235
        },
        {
          month: "November",
          days: 17,
          rain: 31.7
        },
        {
          month: "December",
          days: 4,
          rain: 3.9
        }
      ],
      prNoOfYears: 2,

    //Temperature.....
    temperatureData: [
        {
          month: "January",
          temp: 31,
        },
        {
          month: "February",
          temp: 31,
        },
        {
          month: "March",
          temp: 30,
        },
        {
          month: "April",
          temp: 30,
        },
        {
          month: "May",
          temp: 29,
        },
        {
          month: "June",
          temp: 26,
        },
        {
          month: "July",
          temp: 24,
        },
        {
          month: "August",
          temp: 24,
        },
        {
          month: "September",
          temp: 24,
        },
        {
          month: "October",
          temp: 28,
        },
        {
          month: "November",
          temp: 30,
        },
        {
          month: "December",
          temp: 31,
        }
      ],
      tempNoOfYears: 2,
      stationLatitude: 7.2341,
      
      /// Soil Info
      landfillArea: 10,
      percRunoff: 98,
      landfillSlope: 2,
      slopeLength: 100,
      soilTexture: 8,
      sdVegetation: 2,
      calcCurveNumber: 85.7,

}

export default state
