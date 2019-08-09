<template>
  <div>
    <h1>Search Item</h1>
    <!-- <q-input v-model="find"></q-input>
    {{items}}
    <q-btn @click="getItem">Find</q-btn> -->
    <q-table
      title="Item"
      :data="items"
      :columns="columns"
      row-key="id"
      :filter="find"
      :loading="loading"
    >

      <template v-slot:top>
        <q-space />
        <q-input
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="find"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      rowCount: 10,
      find: "Bo",
      items: [],
      columns: [
        {
          name: "name",
          align: "left",
          label: "Name",
          field: "name",
          sortable: true
        },
        {
          // name: "name",
          align: "left",
          label: "Phone",
          field: "phone",
          sortable: true
        }
      ]
    };
  },
  // mounted() {
  //   this.loading = true;
  //   this.getItem("");
  // },
  watch: {
    find(val) {
      this.loading = true;
      console.log(val);
      this.getItem(val);
    }
  },
  methods: {
    getItem(val) {
      Meteor.call("searchItem", val, (error, result) => {
        if (result) {
          this.loading = false;
          this.items = result;
          console.log(result);
        } else {
          console.log(error);
        }
      });
    }
  }
};
</script>

<style>
</style>
