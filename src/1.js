// @flow

type Estimation = 'GOOD' | 'PASSABLE' | 'BAD' | 'NEUTRAL';
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

function toApiVehicle(ref: Vehicle): ApiVehicle {
  return {
    info: ref.info,
  };
}
