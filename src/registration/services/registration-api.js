import axios from "axios";
import {EventAssembler} from "./event-assembler.js";
import {AtdAssembler} from "./atd-assembler.js";

const eventsEndpoint=import.meta.env.VITE_EVENTS_ENDPOINT;
const attendeesEndpoint=import.meta.env.VITE_ATTENDEES_ENDPOINT;

const http=axios.create({
    baseURL: import.meta.env.VITE_BASEURL + '/api/v1/',
})

export class RegistrationApi {

    getEvents(){
        return http.get(`${eventsEndpoint}`)
            .then(response => EventAssembler.entitiesFromResponse(response))
    }
    getEventById(id){
        return http.get(`${eventsEndpoint}/${id}`)
            .then(response => EventAssembler.entityFromResponse(response))
    }
    getTickets(){
        return http.get(`${attendeesEndpoint}`)
            .then(response => AtdAssembler.entitiesFromResponse(response))
    }

    setCheckIn(atdId){
        return http.patch(`${attendeesEndpoint}/${atdId}`,
            {
                "checkedInAt": new Date()
            })
            .then(response=> AtdAssembler.entitieFromResponse(response))
    }


}