import {printError, printSuccess} from "../services/log.service.js";
import {saveKeyValue, VARIABLE_DICTIONARY} from "../services/storage.service.js";


const saveToken = async (token) => {
    if (!token.length) {
        printError('No token entered');
    }
    try {
        await saveKeyValue(VARIABLE_DICTIONARY.token, token);
        printSuccess('Token saved');
    } catch (e) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('No city entered');
    }
    try {
        await saveKeyValue(VARIABLE_DICTIONARY.city, city);
        printSuccess('City saved');
    } catch (e) {
        printError(e.message);
    }
};


export { saveCity, saveToken };