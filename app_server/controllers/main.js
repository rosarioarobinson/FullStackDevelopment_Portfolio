// Edited main.js file to make it serve initial "index" page
/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'});
};
module.exports = {
    index
};