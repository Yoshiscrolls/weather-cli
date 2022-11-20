import { getKeyValue, VARIABLE_DICTIONARY, printError } from "./index.js";
import axios from "axios";

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01' :
            return '🌞';
        case '02':
            return '⛅';
        case '03':
            return '🌥';
        case '04':
            return '☁️';
        case '09':
            return '🌧';
        case '10':
            return '🌦';
        case '11':
            return '🌩';
        case '13':
            return '🌨';
        case '50':
            return '😶‍🌫';
    }
};

const getWeather = async (city) => {
    const token = await getKeyValue(VARIABLE_DICTIONARY.token);
    if (!token) {
        printError('No token entered, you can add your token by command: -token [API_KEY]')
    }

    const { data } = await  axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    });
    return data;
};

export { getWeather, getIcon };