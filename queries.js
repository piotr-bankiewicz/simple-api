var pg = require("pg");
var conString = process.env.DB_CON_STR;
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
});

const getUsers = (request, response) => {
  client.query("SELECT * FROM users ORDER BY user_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
