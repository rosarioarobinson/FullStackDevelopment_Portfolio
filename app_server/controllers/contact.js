// Created file for Travlr page
/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: 'Contact'});
};

module.exports = {
    contact
};