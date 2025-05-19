import {EventSummary} from "../models/event-summary.entity.js";

export class EventAssembler{
    static entitiesFromResources(item){
        return new EventSummary({...item});
    }
    static entitiesFromResponse(response){
        return response.data.map(item=>{
            return this.entitiesFromResources(item);
        })
    }
    static entityFromResponse(item){
        return this.entitiesFromResources(item.data);
    }
}