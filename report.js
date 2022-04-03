const newman = require('newman');

newman.run({
 collection: require('./User_API.postman_collection.json'),
 //environment: require('./collection/customer_api_env.json'), 
 iterationCount: 1,
 reporters: 'htmlextra',
 reporter: {
 htmlextra: {
 export: './Reports/report.html', // If not specified, the file
 }
 }

}, function (err) {
 if (err) { throw err; }
 console.log('collection run complete!');
});