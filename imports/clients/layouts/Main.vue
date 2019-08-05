<template>
  <div>
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
// import Login from "../pages/Login";
import AdminLayout from "./AdminLayout";
import PublicLayout from "./Public";
export default {
  components: { PublicLayout, AdminLayout },
  data() {
    return {
      currentLayout: AdminLayout
    };
  },
  mounted() {},
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
