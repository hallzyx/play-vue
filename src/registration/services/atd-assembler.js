import {Atd} from "../models/atd.entity.js";

export class AtdAssembler{
    static entitiesFromResource(item){
        return new Atd({...item});
    }

    static entitiesFromResponse(response){
        return response.data.map(item=>{
            return this.entitiesFromResource(item)
        })
    }
    static entitieFromResponse(response){
        return this.entitiesFromResource(response.data)
    }
}