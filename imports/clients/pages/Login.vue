<template>
  <div>
    <q-card class="form-content">
      <q-card-section>
        <div class="text-h5 text-bold text-center text-blue-grey-10 q-py-sm">Log In</div>
      </q-card-section>

      <q-card-section class="q-px-lg">
        <!-- Email -->
        <q-input
          v-model="form.username"
          name="email"
          class="q-mb-md input-login"
          outlined
          dense
          placeholder="Email Address or User"
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
    {{user}}
    <br>
    {{menus}}
  </div>
</template>

<script>
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
      this.$store.dispatch("auth/login", { form: this.form, menu: this.menus });
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
