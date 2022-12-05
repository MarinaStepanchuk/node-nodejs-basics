import zlib from 'zlib';
const gzip = zlib.createUnzip();
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    const input = fs.createReadStream(path.join(`${__dirname}/files/`, 'archive.gz'));
    const out = fs.createWriteStream(path.join(`${__dirname}/files/`, 'fileToCompress.txt'));
    input.pipe(gzip).pipe(out);
};

await decompress();
