export class Atd{
    constructor({
        id,
        firstName,
        lastName,
        eventId,
        ticketIdentifier,
        checkedInAt,
                }){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eventId = eventId;
        this.ticketIdentifier = ticketIdentifier;
        this.checkedInAt = checkedInAt;
    }
}