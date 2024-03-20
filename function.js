const fs = require("fs");

function findUser(username) {
  const rawData = fs.readFileSync("./database.json", "utf8");
  const users = JSON.parse(rawData);
  console.log('Users:', users); // Log the users array
  const user = users.find((user) => user.username === username);
  console.log('Found user:', user); // Log the found user
  return user;
}

module.exports = {
  findUser,
};