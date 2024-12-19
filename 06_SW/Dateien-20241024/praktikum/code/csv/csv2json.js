const fs = require('fs');
const { performance } = require('perf_hooks');

function processCSVFile(inputPath = 'population.csv', outputPath = 'data-json.JSON') {
    const readStartTime = performance.now();
    const file = fs.readFileSync(inputPath);
    const readTime = performance.now() - readStartTime;

    const fileString = file.toString();
    const datasets = fileString.split('\n');

    fs.stat(inputPath, (err, stats) => {
        if (err) {
            console.error('Error reading file stats:', err);
            return;
        }
        console.log(`File is ${stats.size} bytes long`);
        console.log(`The file was last modified at ${stats.mtime}`);
        console.log(`File reading took ${readTime.toFixed(2)} ms`);
        console.log(`There are a total of ${datasets.length - 1} datasets in the file`);
    });

    const processStartTime = performance.now();
    const headers = datasets[0].split(',');
    const objects = datasets.map(data => {
        const values = data.split(',');
        const obj = {};
        for (let i = 0; i < 4; i++) {
            obj[headers[i]] = values[i];
        }
        return obj;
    });

    const processingTime = performance.now() - processStartTime;
    console.log(`Data processing took ${processingTime.toFixed(2)} ms`);

    const jsonString = JSON.stringify(objects, null, 2);
    if (fs.existsSync(outputPath)) {
        fs.rmSync(outputPath);
    }
    fs.writeFileSync(outputPath, jsonString);
}

try {
    processCSVFile();
} catch (error) {
    console.error('Error processing CSV file:', error);
}
