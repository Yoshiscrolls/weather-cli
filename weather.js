import { getArgs } from "./helpers/index.js";
import { printHelp } from "./services/index.js";
import { saveToken, saveCity, getForecast } from "./controllers/index.js";



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
