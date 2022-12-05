import fs from 'fs';
import { createHash } from 'node:crypto'
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = path.join(`${__dirname}/files/`, 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    fs.readFile(file, (err, data) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            console.log(createHash('sha3-256').update(data).digest('hex'));
        }
    })
};

await calculateHash();
