<script>


import EventsItem from "./events-item.component.vue";

export default {
  name: "events-grid",
  components: {EventsItem},
  props:{
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="grid">
    <div v-for="event in events" :key="event.id" class="col-6">
      <events-item :event="event"/>
    </div>
  </div>

</template>

<style scoped>

</style>