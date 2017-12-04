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
