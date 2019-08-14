<template>
  <div>
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
    <modal ref="modal" />
  </div>
</template>

<script>
// import Login from "../pages/Login";
import AdminLayout from "./AdminLayout";
import PublicLayout from "./Public";
import Modal from "../components/Modal";
export default {
  components: { PublicLayout, AdminLayout, Modal },
  data() {
    return {
      currentLayout: AdminLayout
    };
  },
  mounted() {
    this.$root.$modal = this.$refs.modal.open;
  },
  watch: {
    "$route.meta.layout": {
      handler(val) {
        console.log("Layout:", val);
        this.changeLayout(val);
      }
      // immediate: true,
    }
  },
  methods: {
    changeLayout(val) {
      this.currentLayout = val ? val : AdminLayout;
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  }
};
</script>

<style>
</style>
