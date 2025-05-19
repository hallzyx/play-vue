<script>
import {SelectButton as PvSelectButton} from "primevue";

export default {
  name: "language-switcher",
  components: {PvSelectButton},
  data(){
    return{
      languages:['en','es']
    }
  }
}
</script>

<template>
  <pv-select-button :options="languages" v-model="$i18n.locale"  />
</template>

<style scoped>

</style>