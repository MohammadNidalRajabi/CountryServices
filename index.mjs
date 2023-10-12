import { countryList } from "./country.mjs";

class CountryServices {
    //this mehtod for sort country Asc
    sortCountryAToZ = (array) => {
        if(Array.isArray(array) && array.length > 0) {
            array.sort(function(a, b){return a?.countryName.localeCompare(b?.countryName)});
            return array;
        } else {
           return "please enter vaild array.";
        }
        
    }

    //this mehtod for sort country dec
    sortCountryZToA = (array) => {
        if(Array.isArray(array) && array.length > 0) {
            this.sortCountryAToZ(array).reverse();
            return array;
        } else {
            return "please enter vaild array.";
        }
    }

    //this mehtod for search country include set of chracter
    searchByNameInclude = (array, name) => {
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            const country = array?.filter((element) => element?.countryName.toLowerCase().includes(name.toLowerCase()));
            
            if(country) {
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
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            const country = array?.find((element) => element?.countryName.toLowerCase() === name.toLowerCase());
            if(country) {
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
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string' && Array.isArray(cities) && typeof numberOfPopulation ==='number' && numberOfPopulation>0) {
            objectCountry = {
                "id": array?.length + 1,
                "countryName": name,
                "numberOfPopulation": numberOfPopulation,
                 "cities": cities
              };
            array.unshift(objectCountry);
        } else {
           return "please enter vaild array or country name or numberOfPopulation.";
        }
    }

    //this mehtod for add new country from end in countryList
    addToEnd = (array, name,cities,numberOfPopulation) => {
        let objectCountry;

        if(Array.isArray(array) && array.length > 0 && typeof name === 'string' && Array.isArray(cities) && typeof numberOfPopulation ==='number' && numberOfPopulation>0) {
            objectCountry = {
                "id": array?.length + 1,
                "countryName": name,
                "numberOfPopulation": numberOfPopulation,
                 "cities": cities
              };
            array.push(objectCountry);
        } else {
            return "please enter vaild array or country name or numberOfPopulation.";
        }
    }

    //this mehtod for delete country from first in countryList
    deleteFromFirst = (array) => {
        if(Array.isArray(array) && array.length > 0 ) {
            array.shift();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     //this mehtod for delete country from end in countryList
     deleteFromEnd = (array) => {
        if(Array.isArray(array) && array.length > 0 ) {
            array.pop();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     //this mehtod for delete country using full name from countryList
     deleteByName = (array, name) => {
        let  countryIndex = -1;

        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {

            array?.map((element,index) => {
                if(element?.countryName.toLowerCase() === name.toLowerCase()) {
                    countryIndex = index;
                }
            });

            if(countryIndex >= 0) {
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

        if(Array.isArray(array) && array.length > 0 && typeof shunkCount === 'number' && shunkCount > 1 && shunkCount <= array.length) {
            shunkLingth = array.length/shunkCount;
             result = new Array();

            for (let i = 0; i < array.length; i += shunkLingth) {
                result.push(array.slice(i,i + shunkLingth));
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
            if(Array.isArray(element) && element.length > 0) {
                result.push(...element);
            }
        });
        return result;
    }

    //this mehtod return array length 
    arrayLength = (array) => {
        if(Array.isArray(array)) {
            return array.length;
        } else {
            return "please enter vaild array. ";
        }
    }

    //this mehtod for getElementIndex for country
    getElementIndex = (array, name) => {
        let countryIndex =-1;

        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {

             array?.map((element,index) => {
                if(element?.countryName.toLowerCase() === name.toLowerCase()) {
                    return countryIndex = index;
                }
            });
            if(countryIndex >= 0) {
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

        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {

             array?.find((element) =>{
                if(element?.countryName.toLowerCase() === name.toLowerCase()) {
                    isExists = true;
                }
             });
            return isExists;
        } else {
            console.log("please enter vaild array or country name.");
        }
    }

    //this mehtod for add citites for country 
    addCitiesForCountry = (country,cities) => {
        if(Array.isArray(cities) && cities.length > 0 && typeof country === 'object') {
            country.cities = [...country.cities,...cities];
            return country;
        } else {
            return "please enter vaild country or cityName name.";
        }
    }

    //this mehtod for delete city for country 
    deleteCityForCountry = (country, cityName) => {
        let targetCity;

        if(typeof cityName === 'string' && typeof country === 'object') {
            targetCity = country.cities.indexOf(cityName);
            country.cities.splice(targetCity,1);
            return "delete done.";
        } else {
            "please enter vaild country or cityName name.";
        }
    }

    //this mehtod for edit city for country 
    editCityForCountry = (country,cityName,newCityName) => {
        let targetCity;

        if(typeof cityName === 'string' && typeof newCityName === 'string' && typeof country === 'object') {
            targetCity = country.cities.indexOf(cityName);
            country.cities[targetCity] = newCityName;
            return "edit done.";
        } else {
            "please enter vaild country or cityName name or new city name.";
        }
    }

    //this mehtod for return list of citites for country 
    listOfCitiesForCountry = (country) => {
        if(typeof country === 'object') {
            return  country.cities;
        } else {
            "please enter vaild country or cityName name.";
        }
    }

    //this mehtod for search for city in country 
    searchOfCitiesForCountry = (country,cityName) => {
        if(typeof country === 'object' && typeof cityName === 'string') {
            const result = country?.cities?.filter((element) => element?.toLowerCase().includes(cityName.toLowerCase()));
            
            if(result) {
                return result;
            }  else {
                return "not found cities";
            }
        } else {
            return "please enter vaild country or cityName name.";
        }
    }
}

const countryServices = new CountryServices();
console.log(countryServices.addCitiesForCountry(countryServices.searchByFullName(countryList,"Afghanistan"),["7ara t7ta"]));
console.log(countryServices.searchByFullName(countryList,"Afghanistan"));
countryServices.deleteCityForCountry(countryServices.searchByFullName(countryList,"Afghanistan"),"Hebron");
console.log(countryServices.searchByFullName(countryList,"Afghanistan"));
countryServices.editCityForCountry(countryServices.searchByFullName(countryList,"Afghanistan"),"7ara t7ta","Al 7ara al t7ta");
console.log(countryServices.searchByFullName(countryList,"Afghanistan"));
console.log(countryServices.listOfCitiesForCountry(countryServices.searchByFullName(countryList,"Afghanistan")));
console.log(countryServices.searchOfCitiesForCountry(countryServices.searchByFullName(countryList,"Afdasdanistan"),"ga"));
