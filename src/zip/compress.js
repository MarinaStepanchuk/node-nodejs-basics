import zlib from 'zlib';
const gzip = zlib.createGzip();
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const input = fs.createReadStream(path.join(`${__dirname}/files/`, 'fileToCompress.txt'));
    const out = fs.createWriteStream(path.join(`${__dirname}/files/`, 'archive.gz'));
    input.pipe(gzip).pipe(out);
};

await compress();
