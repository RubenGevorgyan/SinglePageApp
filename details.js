import {countries} from './app.js';

export function displayDetails(i){
    var p = document.createElement('p');
    document.getElementById("details__show").appendChild(p);
    p.innerHTML= "Country name is "+ countries[i].name +  " ,capital is " + countries[i].capital + " and code is "+ countries[i].code ;
}
