const https = require('node:https');
const process = require('node:process')

const location = encodeURIComponent(process.argv[2]);

const req = https.get(`https://wttr.in/${location}?format=j1`, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
		const weatherData = JSON.parse(data);
		const temp = weatherData.current_condition[0].temp_C;
		console.log(`${temp}°`);
    });
});

req.end();
