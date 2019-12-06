// in some utils/vuex.js file 
export const mapSetter = (state, setters = {}) => (
    Object.keys(state).reduce((acc, stateName) => {
      acc[stateName] = {
        get: state[stateName],
     };
     // check if setter exists
     if (setters[stateName]) {
        acc[stateName].set = setters[stateName];
     }
  
     return acc;
   }, {})
  );

  export const mapSetterWithUpdateData = (state, store) => {
    return Object.keys(state).reduce((acc, stateName) => {
      acc[stateName] = {
        get: state[stateName],
      };
      // check if setter exists
      acc[stateName].set = function (payload) {
        store.commit("UPDATE_DATA", {key: stateName, value: payload});
        console.log(stateName);
        console.log(payload);
      }
  
      return acc;
    }, {})
  }
  