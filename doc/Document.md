# install ValidatedMethod (https://guide.meteor.com/methods.html#validated-method)

### meteor add mdg:validated-method

# Install simple-schema (https://github.com/aldeed/simple-schema-js/blob/master/README.md)

### npm install simpl-schema

# Usage

## នៅក្នុង File customerMethods.js ហាមដាក់ក្នុង folder server

### customerMethods.js

```js
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
```

### រួច import customerMethods.js នេះទៅដាក់ក្នុង start up server/mian.js

### server/main.js

```js
import { Meteor } from "meteor/meteor";
Meteor.startup(() => {
  import "../api/methods/customerMethods";
});
```

## នៅក្នុង CustomerForm.vue ក្នុងការហៅប្រើគឺ

### ត្រូវ import insertCustomer យកមកប្រើដូចខាងក្រោម

```js
import { insertCustomer } from "../../api/methods/customerMethods";
```

### ក្នុងការ call ហៅ Method ប្រើ

```js
submitInsert() {
        insertCustomer.call(this.form, (error, result) => {
          if (result) {
            console.log("inserted", result);
          } else {
            console.log(error);
          }
        });
      },
```

### CustomerForm.vue

```html
<template>
  <q-card>
    <q-card-section class="content-dialog-form">
      <div class="row">
        <div class="col">
          <q-input v-model="form.name" label="Name" />
          <q-input v-model.number="form.age" label="Age" />
        </div>
      </div>
      <!-- End form items -->
    </q-card-section>
    <!-- Actions -->
    <div class="footer-dialog-form text-right">
      <q-btn
        label="Save"
        color="primary"
        no-caps
        class="btn-action"
        @click="submitInsert"
      />
    </div>
  </q-card>
</template>

<script>
  import { insertCustomer } from "../../api/methods/customerMethods";
  export default {
    data() {
      return {
        form: {
          name: "",
          age: null
        }
      };
    },
    methods: {
      submitInsert() {
        insertCustomer.call(this.form, (error, result) => {
          if (result) {
            console.log("inserted", result);
          } else {
            console.log(error);
          }
        });
      }
    }
  };
</script>
```
