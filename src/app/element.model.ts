export class Element {
    public type: string;
    public size: string;
    public location: string;
    public owner: string;
    public changed: Date;
    public created: Date;

    constructor(type: string, size: string, location: string, owner: string, changed: Date, created: Date) {
        this.type = type;
        this.size = size;
        this.location = location;
        this.owner = owner;
        this.changed = changed;
        this.created = created;
    }
}
