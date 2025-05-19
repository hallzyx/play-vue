<script>
import {Button as PvButton} from "primevue";
import CheckInForm from "../components/check-in-form.component.vue";
import {RegistrationApi} from "../services/registration-api.js";

export default {
  name: "check-in",
  components: {CheckInForm, PvButton},
  data() {
    return {
      matchEvent: null,
      atds: [],
      isInvalid:false,
      isDuplicated:false,
      registerApi: new RegistrationApi(),
      loading:false,
      showAtd_Event:false,
    }
  },
  methods: {
    checkTicketId(ticketValue) {
      this.loading = true;
      this.isInvalid = false,
          this.ticketId = false;
      this.showAtd_Event = false;
      this.registerApi.getTickets()
          .then(response => {
            this.atds = response;
            const certainAtds= this.atds.find(
                ticket => ticket.ticketIdentifier === ticketValue);
            if(certainAtds){
              if(!certainAtds.checkedInAt){
                this.registerApi.setCheckIn(certainAtds.id).then(
                    response => {
                      this.matchEvent = response;
                      return this.registerApi.getEventById(certainAtds.eventId);
                    }
                ).then(
                    response =>{
                      console.log(this.matchEvent)
                      this.matchEvent= {...this.matchEvent,
                      eventName: response.name,
                        eventDescription: response.description,
                        eventScheduledAt: response.scheduledAt
                      };
                      console.log(this.matchEvent)
                      this.showAtd_Event = true;
                    }
                ).catch(error => {
                      console.error("Error checking in ticket:", error);
                    }
                )
              }else{
                this.isInvalid=true;
              }
            }else{
              this.isDuplicated = true;
            }
            this.loading = false;
          })
    }
  }
}
</script>

<template>
  <h1>Event Check-In</h1>
  <check-in-form v-on:check-ticket="checkTicketId($event)" :loading="loading"  />
  <p v-if="isInvalid">Already Checked-In</p>
  <p v-if="isDuplicated">Ticket not found</p>
  <p v-if="showAtd_Event">
    <h2>Event Details</h2>
    <p>User: {{matchEvent.firstName}} {{matchEvent.lastName}}</p>
    <p><strong>Event Name:</strong> {{ matchEvent.eventName }}</p>
    <p><strong>Event Description:</strong> {{ matchEvent.eventDescription }}</p>
    <p><strong>Event Scheduled At:</strong> {{ matchEvent.eventScheduledAt }}</p>
    <p><strong>Checked In At:</strong> {{ matchEvent.checkedInAt }}</p>
  </p>
</template>

<style scoped>

</style>