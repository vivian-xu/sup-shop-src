import { dSuccess, dError, baseFunction } from './base';

export { configResource } from './config';

// get trips list
export function getListTrips (successCallback = dSuccess, errorCallback = dError) {
  baseFunction.bind(this)({
    successCallback,
    errorCallback,
    conf: {
      url: 'trips',
      method: 'GET'
    },
    parser: (results) => results.map((item) => (
      {
        id: item.id,
        name: item.title,
        cover: item.avatar_url,
        start: item.start_at,
        duration: item.duration,
        availableCount: item.available_cnt,
        price: item.price
      }
    ))
  });
}
