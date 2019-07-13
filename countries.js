import {countries} from './app.js';

export function displayCountries() {
  var undorderedList = document.createElement("UL");
  document.getElementById("info__show").appendChild(undorderedList);

  for (var i=0; i<countries.length; i++){
    var li=document.createElement('li');
    undorderedList.appendChild(li);
    var a=document.createElement('a');
    li.appendChild(a);
    a.innerHTML=a.innerHTML + countries[i].name;
    a.href = "#countries/"+ countries[i].code;
  }

}
