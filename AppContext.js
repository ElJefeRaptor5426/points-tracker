import React from 'react';

export default AppContext = React.createContext({
  points: 0,
  history: [],
  actions: [],
  addPoint: () => {},
  subPoint: () => {},
});
