import moment from 'moment';

const plugin = {};

plugin.install = function (Vue, options) { 
    Vue.filter("formatDate", function (value) {
        if (!value) return '';
        value = moment(value).format('MMM Do YY')
        return value;
    })
 }

 export default plugin;