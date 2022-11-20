import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.red(`Error ${error}`));
};

const printSuccess = (message) => {
    console.log(chalk.green(`Success ${message}`));
};

const printHelp = () => {
    console.log(
        dedent(
            `${chalk.yellow('Help')}
            No parameters - weather output
            -save [city] - save the city
            -help - output help menu
            -token [API_KEY] - to save the token
        `)
    );
};

const printWeather = (res, icon) => {
    console.log(
        dedent(
            `${chalk.blue('Weather')}
            Weather in ${res.name}
            ${icon}  ${res.weather[0].description}
            Temperature:${res.main.temp} (feels like: ${res.main.feels_like})
            Humidity:${res.main.humidity}%
            `
        )
    );
};

export { printSuccess, printError, printHelp, printWeather };