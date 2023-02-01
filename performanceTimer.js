const start = performance.now();

const func = async () => { await console.log('Hello World!')};

await func();

const end = performance.now();

console.log(`Execution time: ${end - start} ms`);