export class Country {
    id;
    countryName;
    numberOfPopulation;
    cities = new Array();
    constructor(name,numberOfPopulation,cities) {
        this.id = Math.floor(new Date().valueOf() * Math.random());
        this.countryName = name;
        this.numberOfPopulation = numberOfPopulation;
        this.cities.push(...cities);
    }
}