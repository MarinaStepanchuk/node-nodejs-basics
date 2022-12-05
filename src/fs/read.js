import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = path.join(`${__dirname}/files/`, 'fileToRead.txt');

const read = async () => {
    fs.readFile(file, 'utf-8',(err, data) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            console.log(data);
        }
    })
};

await read();
