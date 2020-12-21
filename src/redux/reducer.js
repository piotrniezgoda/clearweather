const initialState = {
  temperature: '',
  wind: '',
  visibility: '',
  weatherStatus: '',
  pressure: '',
  cloudiness: '',
  sunrise: '',
  sunset: '',
  country: '',
};

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
const weatherData = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_DATA':
      return { weatherData: payload };

    default:
      return state;
  }
};

export default weatherData;
