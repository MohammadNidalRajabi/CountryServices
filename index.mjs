import { countryList } from "./countryData.mjs";
import { Country } from "./country.mjs";
import { City } from "./city.mjs";
import { Area } from "./area.mjs";

class CountryServices {
    // this mehtod for sort country Asc
    sortCountryAToZ = (array) => {
        if (Array.isArray(array) && array.length > 0) {
            array.sort(function(a, b){return a?.countryName.localeCompare(b?.countryName)});
            return array;
        } else {
           return "please enter vaild array.";
        }
    }

    // this mehtod for sort country dec
    sortCountryZToA = (array) => {
        if (Array.isArray(array) && array.length > 0) {
            this.sortCountryAToZ(array).reverse();
            return array;
        } else {
            return "please enter vaild array.";
        }
    }

    //this mehtod for search country include set of chracter
    searchByNameInclude = (array, name) => {
        if (Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            const country = array?.filter((element) => element?.countryName.toLowerCase().includes(name.toLowerCase()));
            
            if (country) {
                return country;
            }  else {
                return "not found country.";
            }
        } else {
            return "please enter vaild array or country name.";
        }
    }
    
    //this mehtod for search country using full name
    searchByFullName = (array, name) => {
        if (Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            const country = array?.find((element) => element?.countryName.toLowerCase() === name.toLowerCase());
            if (country) {
                return country;
            } else {
               return "not found country.";
            }
        } else {
            return "please enter vaild array or country name.";
        }
    }

    //this mehtod for add new country in first for countryList
    addToFirst = (array, name, cities,numberOfPopulation) => {
        let objectCountry;
        if (Array.isArray(array) && array.length > 0 && typeof name === 'string' && Array.isArray(cities) && typeof numberOfPopulation ==='number' && numberOfPopulation>0) {
            objectCountry = new Country(name,numberOfPopulation,cities);
            array.unshift(objectCountry);
        } else {
           return "please enter vaild array or country name or numberOfPopulation.";
        }
    }

    // this mehtod for add new country from end in countryList
    addToEnd = (array, name,cities,numberOfPopulation) => {
        let objectCountry;

        if (Array.isArray(array) && array.length > 0 && typeof name === 'string' && Array.isArray(cities) && typeof numberOfPopulation ==='number' && numberOfPopulation>0) {
            objectCountry = new Country(name,numberOfPopulation,cities);
            array.push(objectCountry);
        } else {
            return "please enter vaild array or country name or numberOfPopulation.";
        }
    }

    //this mehtod for delete country from first in countryList
    deleteFromFirst = (array) => {
        if (Array.isArray(array) && array.length > 0 ) {
            array.shift();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     //this mehtod for delete country from end in countryList
     deleteFromEnd = (array) => {
        if (Array.isArray(array) && array.length > 0 ) {
            array.pop();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     //this mehtod for delete country using full name from countryList
     deleteByName = (array, name) => {
        let  countryIndex = -1;

        if (Array.isArray(array) && array.length > 0 && typeof name === 'string') {

            array?.map((element,index) => {
                if (element?.countryName.toLowerCase() === name.toLowerCase()) {
                    countryIndex = index;
                }
            });

            if (countryIndex >= 0) {
                array.splice(countryIndex,1);
                return "Done";
            } else {
                return "not found country."
            }
        } else {
            return "please enter vaild array or country name.";
        }
    }

     //this mehtod for shunk country from countryList 
     shunkArray = (array,shunkCount) => {
        let shunkLingth  = 0;
        let result;

        if (Array.isArray(array) && array.length > 0 && typeof shunkCount === 'number' && shunkCount > 1 && shunkCount <= array.length) {
            shunkLingth = array.length / shunkCount;
             result = new Array();

            for (let i = 0; i < array.length; i += shunkLingth) {
                result.push(array.slice(i, i + shunkLingth));
            }
            return result;
        } else {
            return("please enter vaild array or shunkCount more then 1 and less then array size.");
        }
    }   
    
    //this mehtod for join shunk country from and return as array 
    joinArrays = (...array) => {
        let result = [];

        array.forEach(element => {
            if (Array.isArray(element) && element.length > 0) {
                result.push(...element);
            }
        });
        return result;
    }

    //this mehtod return array length 
    arrayLength = (array) => {
        if (Array.isArray(array)) {
            return array.length;
        } else {
            return "please enter vaild array. ";
        }
    }

    //this mehtod for getElementIndex for country
    getElementIndex = (array, name) => {
        let countryIndex =-1;

        if (Array.isArray(array) && array.length > 0 && typeof name === 'string') {

             array?.map((element,index) => {
                if (element?.countryName.toLowerCase() === name.toLowerCase()) {
                    return countryIndex = index;
                }
            });
            if (countryIndex >= 0) {
                return countryIndex;
            } else {
                return "not found country";
            }
        } else {
            console.log("please enter vaild array or country name.");
        }
    }

    //this mehtod for checkElementExists for country 
    checkElementExists = (array, name) => {
        let isExists = false;

        if (Array.isArray(array) && array.length > 0 && typeof name === 'string') {

             array?.find((element) =>{
                if (element?.countryName.toLowerCase() === name.toLowerCase()) {
                    isExists = true;
                }
             });
            return isExists;
        } else {
            console.log("please enter vaild array or country name.");
        }
    }

    //this mehtod for add citites of object city for country 
    addCitiesForCountry = (country,cities) => {
        if (Array.isArray(cities) && cities.length > 0 && typeof country === 'object') {
            country.cities = [...country.cities,...cities];
            return country;
        } else {
            return "please enter vaild country or cityName name.";
        }
    }

    //this mehtod for delete city for country 
    deleteCityForCountry = (country, cityName) => {
        let targetCity;

        if (typeof cityName === 'string' && typeof country === 'object') {
             targetCity = country.cities.findIndex(city => city.name === cityName);

            if (targetCity !== -1) {
              country.cities.splice(targetCity, 1);
              return "Delete done.";
            } else {
                console.log("City not found.");
                return "Delete failed: City not found.";
            }
        } else {
            "please enter vaild country or cityName name.";
        }
    }

    //this mehtod for edit city for country 
    editCityForCountry = (country,cityName,newCity) => {
        let targetCity = -1 ;

        if (typeof cityName === 'string' && typeof newCity === 'object' && typeof country === 'object') {
             targetCity = country.cities.findIndex(city => city.name === cityName);

            if (targetCity !== -1) {
                country.cities[targetCity] = newCity;
                return "edit done.";
            } else {
                console.log("City not found.");
                return "edit failed: City not found.";
            }
        } else {
            "please enter vaild country or cityName name or new city.";
        }
    }

    //this mehtod for return list of citites for country 
    listOfCitiesForCountry = (country) => {
        if (typeof country === 'object') {
            return  country.cities;
        } else {
            "please enter vaild country or cityName name.";
        }
    }

    //this mehtod for search for city in country 
    searchOfCitiesForCountry = (country,cityName) => {
        let result;

        if (typeof country === 'object' && typeof cityName === 'string') {
            result = country?.cities?.filter((element) => element?.name?.toLowerCase().includes(cityName.toLowerCase()));
            
            if (result) {
                return result;
            }  else {
                return "not found cities";
            }
        } else {
            return "please enter vaild country or cityName name.";
        }
    }
}

// const countryServices = new CountryServices();
// const area = new Area("A Long",15.123123,16.555);
// console.log(area);
// const city = new City("AZZZZ",[area]);
// const city2 = new City("ABBBB",[area]);
// const city3 = new City("7araa",[area]);
// console.log(city);
// const country = new Country("Haven",100000000,[city,city2]);
// console.log(country);

// const countryy = countryServices.searchByFullName(countryList,"Afghanistan");
// countryServices.addCitiesForCountry(countryy,[city]);
// //countryServices.deleteCityForCountry(country,"ABBBB");
// console.log(countryy);
// countryServices.editCityForCountry(countryy,"AZZZZ",city3);
// console.log(countryServices.listOfCitiesForCountry(countryy));
// console.log(countryServices.searchOfCitiesForCountry(countryy,"AB"));
// console.log(countryy);