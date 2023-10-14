export class Area {
    id;
    name;
    latitude;
    longitude;
    constructor(name,latitude,longitude) {
        this.id = Math.floor(new Date().valueOf() * Math.random());
        this.name = name;
        this.longitude=longitude;
        this.latitude=latitude;
    }
    
}