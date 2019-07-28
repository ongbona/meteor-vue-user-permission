import {Meteor} from 'meteor/meteor'
import Item from '../collections/items'
Meteor.methods({
    insertItem(doc){
        return Item.insert(doc)
    },
    findItem(){
        return Item.find().fetch();
    },
    deleteItem(id){
        return Item.remove({_id:id})
    }
})