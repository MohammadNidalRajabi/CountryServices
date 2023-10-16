

export class CountryServices {
    // this method for sort country Asc
    sortCountryAToZ = (array) => {
        if (Array.isArray(array) && array.length > 0) {
            array.sort(function(a, b){return a?.countryName.localeCompare(b?.countryName)});
            return array;
        } else {
           return "please enter vaild array.";
        }
    }

    // this method for sort country Desc
    sortCountryZToA = (array) => {
        if (Array.isArray(array) && array.length > 0) {
            this.sortCountryAToZ(array).reverse();
            return array;
        } else {
            return "please enter vaild array.";
        }
    }

    // this method for search country include set of chracter
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
    
    // this method for search country using full name
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

    // this method for add new country in first for countryList
    addToFirst = (array, name, cities,numberOfPopulation) => {
        let objectCountry;
        if (Array.isArray(array) && array.length > 0 && typeof name === 'string' && Array.isArray(cities) && typeof numberOfPopulation ==='number' && numberOfPopulation>0) {
            objectCountry = new Country(name,numberOfPopulation,cities);
            array.unshift(objectCountry);
        } else {
           return "please enter vaild array or country name or numberOfPopulation.";
        }
    }

    // this method for add new country from end in countryList
    addToEnd = (array, name,cities,numberOfPopulation) => {
        let objectCountry;

        if (Array.isArray(array) && array.length > 0 && typeof name === 'string' && Array.isArray(cities) && typeof numberOfPopulation ==='number' && numberOfPopulation>0) {
            objectCountry = new Country(name,numberOfPopulation,cities);
            array.push(objectCountry);
        } else {
            return "please enter vaild array or country name or numberOfPopulation.";
        }
    }

    // this method for delete country from first in countryList
    deleteFromFirst = (array) => {
        if (Array.isArray(array) && array.length > 0 ) {
            array.shift();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     // this method for delete country from end in countryList
     deleteFromEnd = (array) => {
        if (Array.isArray(array) && array.length > 0 ) {
            array.pop();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     // this method for delete country using full name from countryList
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

     // this method for shunk country from countryList 
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
    
    // this method for join shunk country from and return as array 
    joinArrays = (...array) => {
        let result = [];

        array.forEach(element => {
            if (Array.isArray(element) && element.length > 0) {
                result.push(...element);
            }
        });
        return result;
    }

    // this method return array length 
    arrayLength = (array) => {
        if (Array.isArray(array)) {
            return array.length;
        } else {
            return "please enter vaild array. ";
        }
    }

    // this method for getElementIndex for country
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

    // this method for checkElementExists for country 
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

    // this method for add citites of object city for country 
    addCities = (country,cities) => {
        if (Array.isArray(cities) && cities.length > 0 && typeof country === 'object') {
            country.cities = [...country.cities,...cities];
            return country;
        } else {
            return "please enter vaild country or cityName name.";
        }
    }

    // this method for delete city for country 
    deleteCity = (country, cityName) => {
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

    // this method for edit city for country 
    editCity = (country,cityName,newCity) => {
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

    // this method for return list of citites for country 
    citiesList = (country) => {
        if (typeof country === 'object') {
            return  country.cities;
        } else {
            "please enter vaild country or cityName name.";
        }
    }

    // this method for search for city in country 
    searchOfCities = (country,cityName) => {
        let result;

        if (typeof country === 'object' && typeof cityName === 'string') {
            result = country?.cities?.filter((element) => element?.name?.toLowerCase().includes(cityName.toLowerCase()));
            
            if (result) {
                return result;
            } else {
                return "not found cities";
            }
        } else {
            return "please enter vaild country or cityName name.";
        }
    }
}