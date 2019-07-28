import { Accounts } from "meteor/accounts-base";
Meteor.methods({
  insertUser(user) {
    console.log(user);
    if (Meteor.isServer) {
      const userId = Accounts.createUser({
        username: user.username,
        email: user.email,
        password: user.password,
        profile: {
          permission: user.permission,
          telephone: user.phone,
          name: user.username,
          age: user.age,
          gender: user.gender
        }
      });
      return userId;
    }
  }
});
