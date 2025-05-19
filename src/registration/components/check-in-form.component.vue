<script>
export default {
  name: "check-in-form",
  emits: ["check-ticket"],
  props:{
    loading: {
      type: Boolean,
    }
  },
  methods:{
    onCheck(){
      this.$emit('check-ticket', this.ticketId);
    }
  },
  data() {
    return {
      ticketId: '',

    }
  },

}
</script>

<template>
  <div class="card">
    <h1 class="text-center mb-4">Event Check-In</h1>

    <pv-card class="mx-auto" style="max-width: 500px;">
      <template #title>
        Verificación de Asistente
      </template>
      <template #content>
          <div class="field">
            <label for="ticket-id" class="font-bold block mb-2">Ticket Identifier</label>
            <pv-input-text
                id="ticket-id"
                v-model="ticketId"
                class="w-full"
                placeholder="Ingrese el código del ticket"
                required
            />
          </div>

          <div class="flex justify-content-center mt-4">
            <pv-button
                type="submit"
                label="Check-in"
                icon="pi pi-check-circle"
                @click="onCheck"
                class="w-full"
                :disabled="loading"
                :loading="loading"
            />
          </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.card {
  padding: 2rem;
}
</style>