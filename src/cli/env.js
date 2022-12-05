const parseEnv = () => {
    const result = [];

    const entries = Object.entries(process.env);

    entries.forEach(item => {
        if (item[0].substring(0, 4) === 'RSS_') result.push(`${item[0]}=${item[1]}`);
    });

    console.log(result.join('; '));
};

parseEnv();
