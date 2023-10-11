import { countryList } from "./country.mjs";

class CountryServices {

     sortCountryAToZ = (array) => {
        if(Array.isArray(array) && array.length > 0) {
            array.sort();
            return array;
        } else {
           return "please enter vaild array.";
        }
        
    }

     sortCountryZToA = (array) => {
        if(Array.isArray(array) && array.length > 0) {
            this.sortCountryAToZ(array).reverse();
            return array;
        } else {
            return "please enter vaild array.";
        }
    }

     searchByNameInclude = (array, name) => {
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            const country = array?.filter((elment) => elment.toLowerCase().includes(name.toLowerCase()));
            
            if(country.length > 0) {
                return country;
            }  else {
                return "not found country.";
            }
        } else {
            return "please enter vaild array or country name.";
        }
    }

     searchByFullName = (array, name) => {
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            const country = array?.find((elment) => elment.toLowerCase() === (name.toLowerCase()));

            if(country.length > 0) {
                return country;
            }  else {
                return "not found country.";
            }
        } else {
            return "please enter vaild array or country name.";
        }
    }

     addToFirst = (array, name) => {
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            array.unshift(name);
        } else {
           return "please enter vaild array or country name.";
        }
    }

     addToEnd = (array, name) => {
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            array.push(name);
        } else {
           return "please enter vaild array or country name.";
        }
    }

     deleteFromFirst = (array) => {
        if(Array.isArray(array) && array.length > 0 ) {
            array.shift();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     deleteFromEnd = (array) => {
        if(Array.isArray(array) && array.length > 0 ) {
            array.pop();
        } else {
           return "please enter vaild array or country name.";
        }
    }

     deleteByName = (array, name) => {
        let  countryIndex =-1;

        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {

            array?.map((elment,index) => {
                if(elment.toLowerCase() === (name.toLowerCase())) {
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

     joinArrays = (...array) => {
        let result = [];

        array.forEach(element => {
            if(Array.isArray(element) && element.length > 0) {
                result.push(...element);
            }
        });
        return result;
    }

     arrayLength = (array) => {
        if(Array.isArray(array)) {
            return array.length;
        } else {
            return "please enter vaild array. ";
        }
    }

     getElementIndex = (array, name) => {
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            if(array.indexOf(name) >= 0) {
                return array.indexOf(name);
            } else {
                return "not found country";
            }
        } else {
            console.log("please enter vaild array or country name.");
        }
    }

     checkElementExists = (array, name) => {
        if(Array.isArray(array) && array.length > 0 && typeof name === 'string') {
            if(array.indexOf(name) >= 0) {
                return true;
            } else {
                return false;
            }
        } else {
            console.log("please enter vaild array or country name.");
        }

    }
}
const countryServices = new CountryServices();

let x=[5]
countryServices.deleteFromFirst(x)
console.log(x);
// console.log(countryServices.deleteFromEnd(countryList));
// console.log(countryServices.sortCountryZToA(countryList));
// console.log(countryServices.searchByNameInclude(countryList,""));
// console.log(countryServices.searchByFullName(countryList,"Palestine"));
// countryServices.addToFirst(countryList,"AAAAaaaa")
// countryServices.addToEnd(countryList,"zzzzzzzz");
// //countryServices.deleteFromFirst(countryList);
// ///countryServices.deleteFromEnd(countryList);
// //console.log(countryServices.deleteByName(countryList,"Palestine"));
// console.log(countryServices.arrayLength(countryList));
// //console.log(countryServices.sortCountryZToA(countryList));
// console.log(countryServices.checkElementExists(countryList,"Palestine"));
// console.log(countryServices.getElementIndex(countryList,"Palestine"));
 console.log(countryServices.shunkArray(countryList,"fase"));
 //console.log(countryServices.joinArrays(countryList));