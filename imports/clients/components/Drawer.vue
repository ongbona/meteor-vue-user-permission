<template>
  <div>
    <q-drawer
      v-model="drawer"
      :breakpoint="400"
      show-if-above
    >

      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
        <q-list padding>
          <q-expansion-item
            expand-separator
            icon="mail"
            label="Inbox"
          >
            <q-expansion-item
              :header-inset-level="1"
              expand-separator
              icon="receipt"
              label="Receipts"
              :content-inset-level="2"
            >
              <q-item
                clickable
                v-ripple
                v-for="(menu,n) in menus"
                @click="router(menu.url)"
                :active="$route.path===`/`+menu.url"
                :key="n"
              >
                <q-item-section avatar>
                  <q-icon :name="menu.icon" />
                </q-item-section>

                <q-item-section>{{menu.title}}</q-item-section>
              </q-item>
            </q-expansion-item>
            <q-expansion-item
              :header-inset-level="1"
              expand-separator
              icon="receipt"
              label="Receipts"
              :content-inset-level="2"
            >
              <q-item
                clickable
                v-ripple
                v-for="(menu,n) in menus"
                @click="router(menu.url)"
                :active="$route.path===`/`+menu.url"
                :key="n"
              >
                <q-item-section avatar>
                  <q-icon :name="menu.icon" />
                </q-item-section>

                <q-item-section>{{menu.title}}</q-item-section>
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
    menus() {
      return this.$store.state.auth.menus;
    },
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
