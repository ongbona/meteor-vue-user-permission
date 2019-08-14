<template>
  <div>
    <q-drawer
      v-model="drawer"
      :breakpoint="400"
      show-if-above
    >

      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            @click="router('admin')"
          >
            <q-item-section>Dashboard</q-item-section>
          </q-item>
          <q-expansion-item
            expand-separator
            icon="settings"
            label="Settings"
          >
            <q-expansion-item
              :header-inset-level="1"
              expand-separator
              icon="person"
              label="Customer"
              :content-inset-level="2"
            >
              <q-item
                clickable
                v-ripple
                @click="router('search')"
                :active="$route.path===`/`+'search'"
              >
                <q-item-section>Search</q-item-section>
              </q-item>
              <q-item
                v-if="user.profile.permission=='admin'"
                clickable
                v-ripple
                @click="router('register')"
                :active="$route.path===`/`+'register'"
              >
                <q-item-section>Regsiter</q-item-section>
              </q-item>
              <q-item
                v-if="user.profile.permission=='admin'"
                clickable
                v-ripple
                @click="router('customer')"
                :active="$route.path===`/`+'customer'"
              >
                <q-item-section>Customer</q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    drawer() {
      return this.$store.state.layout.drawer;
    }
  },
  methods: {
    router(url) {
      this.$router.push({ name: url });
    }
  },
  mounted() {
    this.$store.dispatch("layout/setDrawer", true);
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
