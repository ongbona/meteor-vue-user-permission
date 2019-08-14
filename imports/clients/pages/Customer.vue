<template>
  <div>
    <h1>CSM</h1>
    <q-btn
      color="white"
      text-color="black"
      label="addNew"
      @click="addNew(true)"
    />
    <q-btn
      color="white"
      text-color="black"
      label="Edit"
      @click="edit(true)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      // Modal
      currentModal: null,
      modalVisible: false
    };
  },
  methods: {
    addNew(useModel = false) {
      if (useModel === true) {
        // Use modal as promise fuction()
        this.$root
          .$modal({
            modal: () => import("../components/CustomerForm")
          })
          .then(result => {
            if (result) {
              // eslint-disable-next-line no-console
              console.log(result);
            }
          });
      }
    },
    edit(useModel = false) {
      if (useModel === true) {
        // Use modal as promise fuction()
        this.$root
          .$modal({
            modal: () => import("../components/CustomerForm"),
            updateId: "001",
            updateDoc: {
              name: "josy",
              age: "20"
            }
          })
          .then(result => {
            if (result) {
              // eslint-disable-next-line no-console
              console.log(result);
            }
          });
      }
    }
  }
};
</script>

<style>
</style>