import { stdin } from 'process';
import path from 'path';
import * as url from 'url';
import fs from "fs";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    const out = fs.createWriteStream(path.join(`${__dirname}/files/`, 'fileToWrite.txt'));
    stdin.pipe(out);
};

await write();
