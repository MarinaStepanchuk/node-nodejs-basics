import { argv } from 'node:process';

const parseArgs = () => {
    const result = [];
    argv.forEach((value, index) => {
        if ((index === 1 || index % 2 === 0) && index > 1) {
            result.push(`${value.slice(2)} is ${argv[index + 1]}`);
        }
    });

    console.log(result.join(', '));
};

parseArgs();
