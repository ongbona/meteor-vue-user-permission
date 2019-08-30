import Customer from "../collections/customers";
import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";

export const insertCustomer = new ValidatedMethod({
  name: "customer.insert",
  validate: new SimpleSchema({
    name: {
      type: String
    },
    age: {
      type: Number,
      min: 15
    }
  }).validator(),
  run(doc) {
    return Customer.insert(doc);
  }
});
