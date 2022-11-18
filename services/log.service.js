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
            Без параметров - вывод погоды
            -save [город] - сохранить город
            -help - вывод вспомогательного меню
            -token [API_KEY] - для сохранения токена
        `)
    );
};

export {printSuccess, printError, printHelp};