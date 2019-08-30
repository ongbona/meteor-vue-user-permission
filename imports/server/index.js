import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  import "../api/methods/account";
  import "../api/methods/methodItems";
  import "../api/methods/customerMethods";
  if (Meteor.isServer) {
    if (Meteor.users.find().count() === 0) {
      const userId = Accounts.createUser({
        username: "admin",
        email: "admin@gmail.com",
        password: "admin",
        profile: {
          permission: "admin",
          telephone: "017292912",
          name: "admin",
          age: 20,
          gender: "Male"
        }
      });
      console.log("created user" + userId);
    }
  }
});
