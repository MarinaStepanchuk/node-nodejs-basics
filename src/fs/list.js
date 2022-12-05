import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const folder = path.join(__dirname, 'files');

const list = async () => {
    fs.stat(folder, err => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.readdir(folder, {}, (err, files) => {
                files.forEach(file => console.log(file.split('.').slice(0, -1).join('.')));
            });
        }
    })
};

await list();
