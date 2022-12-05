import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = path.join(`${__dirname}/files/`, 'fresh.txt');

const create = async () => {
    fs.access(file, fs.F_OK, err => {
        if (err) {
            fs.writeFile(file, 'I am fresh and young', err => {
                if(err) throw err;
            })
            return;
        }

        throw new Error('FS operation failed');
    })
};

await create();
