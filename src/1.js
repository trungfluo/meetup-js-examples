// @flow

type Estimation = 'GOOD' | 'PASSABLE' | 'BAD';
type Vehicle = {
  info: {
    estimation: Estimation,
  },
};

type ApiVehicle = {
  info: {
    estimation: ?Estimation,
  },
};

const toApiVehicle = (vehicle: Vehicle): ApiVehicle => {
  return {
    info: vehicle.info,
  };
};

// const vehicle = {
//   info: {
//     estimation: 'GOOD',
//   },
// };

// const apiVehicle = toApiVehicle(vehicle);

// console.log('vehicle = ', vehicle);
// console.log('apiVehicle = ', apiVehicle);
// apiVehicle.info.estimation = null;
// console.log('vehicle = ', vehicle);
// console.log('apiVehicle = ', apiVehicle);
