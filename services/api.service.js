import { getKeyValue, VARIABLE_DICTIONARY, printError } from "./index.js";
import axios from "axios";

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01' :
            return 'π';
        case '02':
            return 'β';
        case '03':
            return 'π₯';
        case '04':
            return 'βοΈ';
        case '09':
            return 'π§';
        case '10':
            return 'π¦';
        case '11':
            return 'π©';
        case '13':
            return 'π¨';
        case '50':
            return 'πΆβπ«';
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