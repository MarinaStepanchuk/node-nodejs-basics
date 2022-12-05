import child_process from 'child_process';
import url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = path.join(`${__dirname}/files/`, 'script.js');

const spawnChildProcess = async (args) => {
    const child = child_process.spawn('node', [file, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['1', '2', '3']);
