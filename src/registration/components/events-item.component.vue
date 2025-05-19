<script>
export default {
  name: "events-item",
  props: {
    event: {
      type: Event,
      required: true
    }
  },
}
</script>

<template>
  <pv-card class="event-card">
    <template #header>
      <div class="flex align-items-center justify-content-between p-2 bg-primary-50">
        <h3 class="m-0 text-lg font-semibold text-primary-900">{{ event.name }}</h3>
        <pv-tag severity="info" icon="pi pi-calendar">
          {{ new Date(event.scheduledAt).toLocaleDateString() }}
        </pv-tag>
      </div>
    </template>
    <template #content>
      <div class="p-2">
        <p class="description">{{ event.description }}</p>
        <pv-divider />
        <div class="flex justify-content-end">
          <pv-button icon="pi pi-info-circle" label="Ver detalles" size="small" text />
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.event-card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}
.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
.description {
  line-height: 1.5;
  margin: 0.5rem 0;
  max-height: 4.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>