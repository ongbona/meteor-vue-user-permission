<template>
  <q-toolbar>
    <q-btn
      flat
      @click="setDrawer"
      round
      dense
      icon="menu"
    />
    <q-toolbar-title>Doctor IT</q-toolbar-title>
    <!-- account -->
    <q-btn
      round
      flat
      icon="person"
    >
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column items-center">
            <q-avatar size="72px">
              <img src="/boy-avatar.png" />
            </q-avatar>

            <!-- <div class="text-subtitle1 q-mt-md q-mb-xs" v-if="user.profile.name">{{user.profile.name}}</div> -->

            <q-btn
              v-if="loggedIn"
              @click="btnLogout"
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />

            <q-btn
              v-if="!loggedIn"
              color="info"
              label="Login"
              push
              size="sm"
              @click="$router.push('/login')"
              v-close-popup
            />
            <q-btn
              v-if="!loggedIn"
              color="primary"
              label="Register"
              push
              size="sm"
              @click="$router.push('/register')"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
    <!-- End account -->
  </q-toolbar>
</template>

<script>
export default {
  computed: {
    drawer() {
      return this.$store.state.layout.drawer;
    },
    loggedIn() {
      return this.$store.getters["auth/loggedIn"];
    }
  },
  methods: {
    btnLogout() {
      this.$store.dispatch("auth/logout").then(result => {});
    },
    setDrawer() {
      this.$store.dispatch("layout/setDrawer", !this.drawer);
    }
  }
};
</script>

<style>
</style>
