import { stdout } from 'process';
import path from 'path';
import * as url from 'url';
import fs from "fs";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const input = fs.createReadStream(path.join(`${__dirname}/files/`, 'fileToRead.txt'));
    input.pipe(stdout);
};

await read();
