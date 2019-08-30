import { Mongo } from "meteor/mongo";
const Customer = new Mongo.Collection("customers");
export default Customer;
