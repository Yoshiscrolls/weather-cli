import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";
import { saveToken, saveCity } from "./controllers/save.controller.js";
import { getForecast } from "./controllers/weather.controller.js";


const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.help) {
        return printHelp();
    }
    if (args.save) {
        return saveCity(args.save)
    }
    if (args.token) {
        return saveToken(args.token)
    }
    return getForecast();
};

initCLI();
