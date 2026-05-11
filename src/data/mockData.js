
export const initialState = {
  slots: [
    { id: 'P1', occupied: false, sensor: 'ACTIVE' },
    { id: 'P2', occupied: false, sensor: 'ACTIVE' },
    { id: 'P3', occupied: false, sensor: 'ACTIVE' },
    { id: 'P4', occupied: false, sensor: 'ACTIVE' },
  ],
  gate: {
    status: 'CLOSED',
    carDetected: false,
  },

};

