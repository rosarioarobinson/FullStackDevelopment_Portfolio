// Created file for Travlr page

// Edited file to use NodeJS file system to retrieve JSON data from trips.json
var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Getaways', trips}); // Added trips data to pass to handlebars views
};

module.exports = {
    travel
};