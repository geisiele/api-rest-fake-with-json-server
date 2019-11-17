var fileUsers = require('./data/users.js');
var fileComments = require('./data/comments.js');

var users = new fileUsers();
var comments = new fileComments();

module.exports = function() {
    return {
        users,
        comments
    }
}