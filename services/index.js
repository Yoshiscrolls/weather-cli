import { getWeather, getIcon } from './api.service.js';
import { printSuccess, printError, printHelp, printWeather } from './log.service.js';
import { saveKeyValue, getKeyValue, VARIABLE_DICTIONARY } from './storage.service.js';


export { getWeather,
    getIcon,
    printSuccess,
    VARIABLE_DICTIONARY,
    getKeyValue,
    printWeather,
    printError ,
    printHelp,
    saveKeyValue
};