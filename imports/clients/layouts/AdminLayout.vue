<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh Lpr lff"
      class="shadow-2 rounded-borders"
    >
      <q-header
        reveal
        elevated
        class="bg-cyan-8"
      >
        <Toobar></Toobar>
      </q-header>

      <Drawer></Drawer>

      <q-page-container>
        {{menus}}hi
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
</script>
<script>
import _ from "lodash";
import Toobar from "../components/Toolbar";
import Drawer from "../components/Drawer";
export default {
  components: {
    Toobar,
    Drawer
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    menus() {
      return this.$store.state.auth.menus;
    }
  },

  mounted() {
    this.$store.dispatch("RoleRoute");
  },
  methods: {},
  data() {
    return {};
  }
};
</script>
