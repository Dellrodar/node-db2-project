const knex = require("knex");
const knexfile = require("../knexfile")

//initialize a connection to the data,
// so we can import other files
module.exports = knex(knexfile);