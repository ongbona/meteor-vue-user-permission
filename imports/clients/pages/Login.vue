<template>
  <div>
    <q-card
      flat
      bordered
      class="absolute-center login"
    >
      <q-card-section>
        <div class="text-h5 text-bold text-center text-blue-grey-10 q-py-sm">Log In</div>
      </q-card-section>

      <q-card-section class="q-px-lg">
        <!-- Email -->
        <q-input
          v-model="form.username"
          class="q-mb-md input-login"
          outlined
          dense
          placeholder="Email Address or User"
          name="username"
          v-validate="'required'"
          :error="errors.has('username')"
          :error-message="errors.first('username')"
        />
        <!-- Password -->
        <q-input
          v-model="form.password"
          name="password"
          class="input-login"
          type="password"
          outlined
          dense
          placeholder="Password"
          v-validate="'required'"
          :error="errors.has('password')"
          :error-message="errors.first('password')"
        />
      </q-card-section>

      <q-card-actions
        vertical
        align="center"
        class="q-px-lg q-pt-none q-pb-md"
      >
        <q-btn
          @click="btnLogin"
          label="Log In"
          color="primary"
          class="full-width"
          dense
          flat
        ></q-btn>

        <div>Forgot password?</div>
      </q-card-actions>
    </q-card>

    <div
      class="q-mt-md text-weight-medium text-grey-1"
      align="center"
    >
      Don't have an account?
      <span>Sign Up</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
import menu from "../sidebar";
export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },

  created() {
    if (this.user._id) {
      this.$router.push("/");
    }
  },

  methods: {
    btnLogin() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.$store.dispatch("auth/login", {
            form: this.form,
            menu: this.menus
          });
          return;
        }
      });
    }
  },
  data() {
    return {
      menus: menu,
      form: {
        username: "",
        password: ""
      },

      accept: false
    };
  }
};
</script>
<style>
.login {
  width: 30%;
}
</style>
