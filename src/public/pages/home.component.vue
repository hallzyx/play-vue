<script>
import {RegistrationApi} from "../../registration/services/registration-api.js";
import EventsGrid from "../../registration/components/events-grid.component.vue";

export default {
  name: "home",
  components: {EventsGrid},
  data(){
    return{
      events:[],
      attendees:[],
      registrationApi: new RegistrationApi()
    }
  },
  methods:{
    getEvents(){
      this.registrationApi.getEvents()
          .then(response =>{
            console.log(response)
            this.events= response;
          })
      console.log(this.events);
    }
  },
  created() {
    this.getEvents();
  }
}
</script>

<template>
  <h1>{{$t('check-in.title')}}</h1>
  <h2>{{$t('check-in.subtitle')}}</h2>
  <events-grid :events="this.events" />
</template>

<style scoped>

</style>