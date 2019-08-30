<template>
  <q-card flat>
    <!-- Header section -->
    <q-card-section>
      <div class="text-body2 text-blue-grey-10">
        <q-icon
          :name="$attrs.updateId?'edit':'add'"
          style="font-size: 1.3em;"
        />
        {{ `${$attrs.updateId?'Edit':'New'}` }} Provisioning
      </div>
    </q-card-section>
    <q-separator />
    <!-- Body section -->
    <q-card-section>
      <h1>
        <center>{{form}}</center>
      </h1>
    </q-card-section>
    <q-card-section class="content-dialog-form">
      <div class="row">
        <div class="col">
          <q-input
            v-model="form.name"
            label="Name"
          />
          <q-input
            v-model.number="form.age"
            label="Age"
          />
        </div>
      </div>
      <!-- End form items -->
    </q-card-section>

    <!-- Actions -->
    <div class="footer-dialog-form text-right">
      <q-btn
        label="Cancel"
        color="warning"
        no-caps
        class="btn-action"
        @click="handleCancel"
      />

      <q-btn
        v-if="$attrs.updateId"
        label="Delete"
        color="negative"
        no-caps
        class="btn-action"
        @click="remove"
      />

      <q-btn
        label="Save"
        color="primary"
        no-caps
        class="btn-action"
        @click="$attrs.updateId? submitUpdate():submitInsert()"
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
  mounted() {
    if (this.$attrs.updateDoc != null) {
      this.form = this.$attrs.updateDoc;
    }
  },
  methods: {
    submitInsert() {
      // this.$validator.validateAll().then(result => {
      //   if (result) {
      this.$q.notify({
        color: "green-14",
        textColor: "white",
        message: "Success",
        position: "top"
      });
      insertCustomer.call(this.form, (error, result) => {
        if (result) {
          console.log("inserted", result);
        } else {
          console.log(error);
        }
      });
      if (this.isModal) {
        // Emit to modal
        this.$emit("save", "Success");
      } else {
        this.clearForm();
      }
      //   }
      // })
    },
    submitUpdate() {
      // this.$validator.validateAll().then(result => {
      //   if (result) {
      this.$q.notify({
        color: "green-14",
        textColor: "white",
        message: "Success",
        position: "top"
      });
      console.log(this.form);
      if (this.isModal) {
        // Emit to modal
        this.$emit("save", "Success");
      } else {
        this.handleCancel();
      }
      //   }
      // })
    },
    clearForm() {
      // this.$validator.reset()
    },
    remove() {
      // const updateId = this.$attrs.updateId
    },

    handleCancel() {
      // Emit to modal
      this.$emit("cancel");
    }
  }
};
</script>
