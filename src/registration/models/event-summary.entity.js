export class EventSummary{
    constructor(
        {
            id,
            name,
            description,
            scheduledAt
        }
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.scheduledAt = scheduledAt;
    }
}