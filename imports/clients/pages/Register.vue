<template>
  <div>
    <br>
    <q-input
      label="Uer name"
      outlined
      v-model="form.username"
    ></q-input><br>
    <q-input
      label="Age"
      outlined
      v-model="form.age"
    ></q-input><br>
    <q-input
      label="Gender"
      outlined
      v-model="form.gender"
    ></q-input><br>
    <q-input
      label="Email"
      outlined
      v-model="form.email"
    ></q-input><br>
    <q-input
      label="Password"
      outlined
      type="password"
      v-model="form.password"
    ></q-input><br>
    <q-input
      label="Confirm password"
      outlined
      type="password"
      v-model="confirm"
    ></q-input><br>
    <q-select
      outlined
      label="Role"
      v-model="form.permission"
      :options="permissionOpts"
    />
    <q-btn
      color="primary"
      label="Register"
      @click="btnRegister"
    />
    <h1>{{count}} </h1>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.auth.count;
    }
  },
  methods: {
    btnRegister() {
      console.log(this.$store.getters["auth/loggedIn"]);
      if (this.form.password == this.confirm) {
        this.$store.dispatch("auth/register", this.form);
      }
    }
  },
  data() {
    return {
      form: {
        username: "",
        age: "",
        gender: "",
        email: "",
        permission: "",
        password: ""
      },
      permissionOpts: ["admin", "user"],
      confirm: ""
    };
  }
};
</script>

<style>
</style>
