<script>
  import AppHeader from "./public/components/app-header.component.vue";
  import AppFooter from "./public/components/app-footer.component.vue";

  export default {
    name: 'Insane app',
    components: {AppFooter, AppHeader},

  }
</script>
<template>
  <app-header />
  <router-view/>
  <app-footer />
</template>