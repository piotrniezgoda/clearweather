/* eslint-disable arrow-body-style */
// eslint-disable-next-line import/prefer-default-export
export const addData = ({ payload }) => {
  return {
    type: 'ADD_DATA',
    payload: [
      {
        temperature: payload.main.temp,
        weatherStatus: payload.weather[0].description,
        country: payload.sys.country,
        city: payload.name,
        icon: payload.weather[0].icon,
        weatherUpdate: payload.dt,
        detailWeather: {
          pressure: payload.main.pressure,
          visibility: payload.visibility,
          wind: payload.wind.speed,
          sunrise: payload.sys.sunrise,
          sunset: payload.sys.sunset,
          cloudiness: payload.clouds.all,
          humidity: payload.main.humidity,
        },
      },
    ],
  };
};
