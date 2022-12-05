import { Worker } from 'worker_threads';
import os from 'os';
import path from "path";
import url from "url";

const initValue = 10;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = path.join(`${__dirname}/`, 'worker.js');

const performCalculations = async () => {
    const workers = os.cpus().map((_, index) => new Promise((resolve, reject) => {
        const worker = new Worker(file, {workerData: initValue + index});

        worker.on('message', resolve);
        worker.on('error', reject);
    })
    );

    const promisesResults = await Promise.allSettled(workers);
    const result = promisesResults.map(({ status, value }) => (
        {
            status: status === 'fulfilled' ? 'resolved' : 'error',
            data: value ? value : null
        }
    ));

    console.log(result);
};

await performCalculations();
