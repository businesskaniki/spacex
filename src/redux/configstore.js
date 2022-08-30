import { configureStore } from '@reduxjs/toolkit';
import missionResucer from './missions/mission';

const rootReducer = { mission: missionResucer };

const store = configureStore({ reducer: rootReducer });
console.log(store);
export default store;
