import { DateTime } from 'luxon';

const API_KEY = "027ae6bb7537852998940514a02d2767";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        main: {feels_like, humidity, pressure, temp, temp_max, temp_min},
        name,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
    } = data

    const {main: details, icon} = weather[0]

    return {feels_like, humidity, pressure, temp, temp_max, temp_min, name, country, sunrise, sunset, details, icon, speed}
}

const getFormattedCurrentWeather = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)

    return formattedCurrentWeather
}

const formatToLocalTime = (
    secs,
    zone,
    format = "hh:mm a"
) => DateTime.fromSeconds(secs).toFormat(format);

const iconURLFromCode = (code) => 
    `http://openweathermap.org/img//wn/${code}@2x.png`;

export default getFormattedCurrentWeather;

export {formatToLocalTime, iconURLFromCode};