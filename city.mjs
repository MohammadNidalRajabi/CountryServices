export class City {
    id;
    name;
    areas = new Array();
    constructor(name,areas) {
        this.id = Math.floor(new Date().valueOf() * Math.random());
        this.name = name;
        this.areas.push(...areas);
    }
}