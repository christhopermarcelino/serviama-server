const UserQuery = require("../repository/UserRepository");

function User({ nrp, name, phone_number, email, password }) {
  this.nrp = nrp;
  this.name = name;
  this.phone_number = phone_number;
  this.email = email;
  this.password = password;
}

User.prototype.createUser = async function () {
  return await UserQuery.createUser({
    nrp: this.nrp,
    name: this.name,
    phone_number: this.phone_number,
    email: this.email,
    password: this.password,
  });
};

const getAllUsers = async () => {
  return await UserQuery.getAllUsers();
};

const getUserById = async (id) => {
  return await UserQuery.getUserById(id);
};

module.exports = { User, getAllUsers, getUserById };
