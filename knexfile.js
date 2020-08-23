module.exports = {
  client: "sqlite3", // specifying the DBMS
  useNullAsDefault: true, // an option that is require for SQLite
  connection: {
    filename: "./data/car-dealer.db3", // location of our database
  },
}