import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = path.join(`${__dirname}/files/`, 'wrongFilename.txt');
const destinatioFile = path.join(`${__dirname}/files/`, 'properFilename.md');

const rename = async () => {
    fs.access(file, fs.F_OK, err => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.access(destinatioFile, fs.F_OK, err => {
                if (err) {
                    fs.rename(file, destinatioFile, err => {
                        if (err) throw err;

                    });
                } else {
                    throw new Error('FS operation failed');
                }
            })
        }
    })
};

await rename();
