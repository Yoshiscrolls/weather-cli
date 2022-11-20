import {getKeyValue,
    VARIABLE_DICTIONARY,
    getWeather,
    getIcon,
    printError,
    printWeather } from "../services/index.js";



const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(VARIABLE_DICTIONARY.city)
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('The city is not valid');
        } else if (e?.response?.status === 401) {
            printError('The token is not valid');
        } else {
            printError(e.message);
        }
    }
};

export { getForecast };