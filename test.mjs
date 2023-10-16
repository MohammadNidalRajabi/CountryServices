import { countryList } from "./CountryList.mjs";
import { Country } from "./Country.mjs";
import { City } from "./City.mjs";
import { Area } from "./Area.mjs";
import { CountryServices } from "./CountryServices.mjs";

const countryServices = new CountryServices();
const area = new Area("A Long",15.123123,16.555);
console.log(area);
const city = new City("AZZZZ",[area]);
const city2 = new City("ABBBB",[area]);
const city3 = new City("hebron",[area]);
console.log(city);
const country = new Country("Haven",100000000,[city,city2]);
console.log(country);

const countryy = countryServices.searchByFullName(countryList,"Afghanistan");
countryServices.addCities(countryy,[city]);
countryServices.deleteCity(country,"ABBBB");
console.log(countryy);
countryServices.editCity(countryy,"AZZZZ",city3);
console.log(countryServices.citiesList(countryy));
console.log(countryServices.searchOfCities(countryy,"AB"));
console.log(countryy);