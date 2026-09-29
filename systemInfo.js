import os from 'os';

console.log('--- System Summary ---');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);