import { createStore } from 'redux';
import weatherApp from './reducer';

const store = createStore(weatherApp);

export default store;
