<template>
  <q-dialog
    v-model="modalVisible"
    :maximized="fullscreen"
    :transition-show="showTrans"
    :transition-hide="hideTrans"
  >
    <!-- Component -->
    <component
      :is="currentModal"
      v-bind="childProps"
      @save="handleFormSave"
      @cancel="handleModalClose"
    />
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
      currentModal: null,
      // Child props
      updateId: null,
      updateDoc: null,
      // Options
      fullscreen: true,
      showTrans: "slide-down",
      hideTrans: "slide-up",
      // Return promise
      resolve: null,
      reject: null
    };
  },

  computed: {
    childProps() {
      let props = {
        isModal: true,
        updateId: this.updateId,
        updateDoc: this.updateDoc
      };
      return props;
    }
  },

  methods: {
    open({
      modal,

      updateId = null,
      updateDoc = null,
      fullscreen = true,
      showTrans = "slide-down",
      hideTrans = "slide-up"
    }) {
      // Open modal
      this.modalVisible = true;
      // Child props
      this.updateId = updateId;
      this.updateDoc = updateDoc;
      // Options
      this.fullscreen = fullscreen;
      this.showTrans = showTrans;
      this.hideTrans = hideTrans;
      this.$nextTick(() => {
        this.currentModal = modal;
      });
      // Promise fuction
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    handleFormSave(result) {
      // Return resolve
      this.resolve(result);
      // Close Modal
      this.modalVisible = false;
      this.$nextTick(() => {
        this.currentModal = null;
      });
    },
    handleModalClose() {
      // Return resolve
      this.resolve(false);
      // Close Modal
      this.modalVisible = false;
      this.$nextTick(() => {
        this.currentModal = null;
      });
    }
  }
};
</script>