<template>
  <!-- Existing template code -->
  <button
    @click="showModal = true"
    class="rounded-md border-0 bg-violet-500 px-12 py-2 text-base text-white shadow-lg shadow-violet-300 transition hover:bg-violet-600 hover:shadow-violet-400 dark:shadow-violet-900"
  >
    Dodaj wydarzenie
  </button>
  <ModalComponent v-model:isVisible="showModal">
    <EventForm />
  </ModalComponent>
  <!-- Rest of the template -->
</template>

<script>
import ModalComponent from "./ModalComponent.vue";
import EventForm from "../components/EventForm.vue";

export default {
  components: {
    ModalComponent,
    EventForm,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
