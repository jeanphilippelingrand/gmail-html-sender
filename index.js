const fs = require('fs');
// const params = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const params = require('./config')
const service = require('./service');

service.readAndSend(params);