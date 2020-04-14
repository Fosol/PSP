import { combineReducers } from 'redux';
import parcelsReducer from 'reducers/parcelsReducer';
import lookupCodeReducer from 'reducers/lookupCodeReducer';
import * as reducerTypes from 'constants/reducerTypes';
import networkReducer from './networkReducer';
import accessRequestReducer from 'reducers/accessRequestReducer';
import usersReducer from './usersReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import leafletMouseSlice from './LeafletMouseSlice';
import userDetailReducer from './userDetailReducer';
import jwtSlice from './JwtSlice';

export const reducerObject = {
  loadingBar: loadingBarReducer,
  [reducerTypes.PARCEL]: parcelsReducer,
  [reducerTypes.ACCESS_REQUEST]: accessRequestReducer,
  [reducerTypes.USERS]: usersReducer,
  [reducerTypes.GET_USER_DETAIL]: userDetailReducer,
  [reducerTypes.LOOKUP_CODE]: lookupCodeReducer,
  [reducerTypes.NETWORK]: networkReducer,
  [reducerTypes.LEAFLET_CLICK_EVENT]: leafletMouseSlice.reducer,
  [reducerTypes.JWT]: jwtSlice.reducer,
};

export const rootReducer = combineReducers(reducerObject);

export type RootState = ReturnType<typeof rootReducer>;
