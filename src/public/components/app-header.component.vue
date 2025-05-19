<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
name: "app-header",
  components: {LanguageSwitcher}
}
</script>

<template>
  <pv-toolbar>
    <template #start>
      <h1>ISO 27001:2022 certified</h1>
    </template>
    <template #center>
      <router-link to="/home">
        Home
      </router-link>
      <router-link to="/check-in">
        Check In
      </router-link>
    </template>
    <template #end>
      <language-switcher />
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>