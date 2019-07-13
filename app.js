import {displayCountries} from './countries.js';
import {displayDetails} from './details.js';

export let countries = [{
      name: "Armenia",
      capital: "Yerevan",
      code: 'am'
        },
      {
      name: "Russia",
      capital: "Moscow",
      code: 'ru'
    },
    {
      name:"England",
      capital: "London",
      code: 'en'
    }
  ];

function locationHashChanged() {
  if (location.hash === '#countries') {
    var element = document.getElementById("content");
    element.parentNode.removeChild(element);
    displayCountries();
  }

  for(let i=0; i<countries.length; i++){
    if (location.hash === '#countries/' + countries[i].code) {
      var element = document.getElementById("info__show");
      element.parentNode.removeChild(element);
      displayDetails(i);
      }
   }
}

window.onhashchange = locationHashChanged;
