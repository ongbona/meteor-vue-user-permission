import { Meteor } from "meteor/meteor";
import Item from "../collections/items";
Meteor.methods({
  searchItem(find) {
    let data = Item.find({ name: { $regex: find } }, { limit: 10 }).fetch();

    return data;
  },
  insertItem(doc) {
    return Item.insert(doc);
  },
  findItem() {
    return Item.find().fetch();
  },
  deleteItem(id) {
    return Item.remove({ _id: id });
  }
});
