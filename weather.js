import {getArgs} from "./helpers/args.js";
import {printSuccess, printError, printHelp} from "./services/log.service.js";
import {saveKeyValue} from "./services/storage.service.js";


const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Токен сохранён')
    } catch (e) {
        printError(e.message)
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.help) {
        printHelp();
    }
    if (args.save) {

    }
    if (args.token) {
        return saveToken(args.token)
    }
};

initCLI();
