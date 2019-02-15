import React from 'react';

export default AppContext = React.createContext({
  points: 0,
  addPoint: () => {},
  subPoint: () => {},
});
