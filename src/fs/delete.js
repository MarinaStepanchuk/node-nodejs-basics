import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = path.join(`${__dirname}/files/`, 'fileToRemove.txt');

const remove = async () => {
    fs.access(file, fs.F_OK, err => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.unlink(file, err => {
                if (err) throw err;
            })

        }
    })
};

await remove();
