import fs from 'fs';
import path from 'path';
import * as url from 'url';
import fsPromises from 'fs/promises';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const folderCopy = path.join(__dirname, 'files');
const folderNewCopy = path.join(__dirname, 'files_copy');

const copyDir = async (folder, folderNew) => {
    const files = await fsPromises.readdir(folder, { withFileTypes: true });
    files.forEach(file => {
        if(file.isFile()) {
            fsPromises.copyFile(path.join(folder,file.name), path.join(folderNew, file.name));
        } else {
            fsPromises.mkdir(path.join(folderNew, file.name), { recursive: true }).then(
                copyDir(path.join(folder, file.name), path.join(folderNew, file.name)));
        }
    });
};

const copy = async () => {
    fs.stat(folderCopy, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
        else {
            fs.stat(folderNewCopy, err => {
                if (err) {
                    fs.mkdir(folderNewCopy, {recursive: true}, err => {
                        if (err) {
                            throw err
                        } else {
                            copyDir(folderCopy, folderNewCopy);
                        }
                    })
                } else {
                    throw new Error('FS operation failed');
                }
            })
        }
    });
};

copy();
